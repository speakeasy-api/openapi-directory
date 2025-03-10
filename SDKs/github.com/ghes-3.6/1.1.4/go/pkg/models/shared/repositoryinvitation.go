// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

// RepositoryInvitationPermissionsEnum - The permission associated with the invitation.
type RepositoryInvitationPermissionsEnum string

const (
	RepositoryInvitationPermissionsEnumRead     RepositoryInvitationPermissionsEnum = "read"
	RepositoryInvitationPermissionsEnumWrite    RepositoryInvitationPermissionsEnum = "write"
	RepositoryInvitationPermissionsEnumAdmin    RepositoryInvitationPermissionsEnum = "admin"
	RepositoryInvitationPermissionsEnumTriage   RepositoryInvitationPermissionsEnum = "triage"
	RepositoryInvitationPermissionsEnumMaintain RepositoryInvitationPermissionsEnum = "maintain"
)

func (e RepositoryInvitationPermissionsEnum) ToPointer() *RepositoryInvitationPermissionsEnum {
	return &e
}

func (e *RepositoryInvitationPermissionsEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "read":
		fallthrough
	case "write":
		fallthrough
	case "admin":
		fallthrough
	case "triage":
		fallthrough
	case "maintain":
		*e = RepositoryInvitationPermissionsEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RepositoryInvitationPermissionsEnum: %v", v)
	}
}

// RepositoryInvitation - Repository invitations let you manage who you collaborate with.
type RepositoryInvitation struct {
	CreatedAt time.Time `json:"created_at"`
	// Whether or not the invitation has expired
	Expired *bool  `json:"expired,omitempty"`
	HTMLURL string `json:"html_url"`
	// Unique identifier of the repository invitation.
	ID int64 `json:"id"`
	// A GitHub user.
	Invitee NullableSimpleUser `json:"invitee"`
	// A GitHub user.
	Inviter NullableSimpleUser `json:"inviter"`
	NodeID  string             `json:"node_id"`
	// The permission associated with the invitation.
	Permissions RepositoryInvitationPermissionsEnum `json:"permissions"`
	// Minimal Repository
	Repository MinimalRepository `json:"repository"`
	// URL for the repository invitation
	URL string `json:"url"`
}
