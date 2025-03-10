// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// OrgsListOutsideCollaboratorsFilterEnum - Filter the list of outside collaborators. `2fa_disabled` means that only outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned.
type OrgsListOutsideCollaboratorsFilterEnum string

const (
	OrgsListOutsideCollaboratorsFilterEnumTwofaDisabled OrgsListOutsideCollaboratorsFilterEnum = "2fa_disabled"
	OrgsListOutsideCollaboratorsFilterEnumAll           OrgsListOutsideCollaboratorsFilterEnum = "all"
)

func (e OrgsListOutsideCollaboratorsFilterEnum) ToPointer() *OrgsListOutsideCollaboratorsFilterEnum {
	return &e
}

func (e *OrgsListOutsideCollaboratorsFilterEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2fa_disabled":
		fallthrough
	case "all":
		*e = OrgsListOutsideCollaboratorsFilterEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for OrgsListOutsideCollaboratorsFilterEnum: %v", v)
	}
}

type OrgsListOutsideCollaboratorsRequest struct {
	// Filter the list of outside collaborators. `2fa_disabled` means that only outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned.
	Filter *OrgsListOutsideCollaboratorsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	// The organization name. The name is not case sensitive.
	Org string `pathParam:"style=simple,explode=false,name=org"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type OrgsListOutsideCollaboratorsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	SimpleUsers []shared.SimpleUser
}
