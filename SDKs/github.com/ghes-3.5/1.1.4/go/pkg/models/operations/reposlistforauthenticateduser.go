// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
	"time"
)

// ReposListForAuthenticatedUserDirectionEnum - The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
type ReposListForAuthenticatedUserDirectionEnum string

const (
	ReposListForAuthenticatedUserDirectionEnumAsc  ReposListForAuthenticatedUserDirectionEnum = "asc"
	ReposListForAuthenticatedUserDirectionEnumDesc ReposListForAuthenticatedUserDirectionEnum = "desc"
)

func (e ReposListForAuthenticatedUserDirectionEnum) ToPointer() *ReposListForAuthenticatedUserDirectionEnum {
	return &e
}

func (e *ReposListForAuthenticatedUserDirectionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "asc":
		fallthrough
	case "desc":
		*e = ReposListForAuthenticatedUserDirectionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposListForAuthenticatedUserDirectionEnum: %v", v)
	}
}

// ReposListForAuthenticatedUserSortEnum - The property to sort the results by.
type ReposListForAuthenticatedUserSortEnum string

const (
	ReposListForAuthenticatedUserSortEnumCreated  ReposListForAuthenticatedUserSortEnum = "created"
	ReposListForAuthenticatedUserSortEnumUpdated  ReposListForAuthenticatedUserSortEnum = "updated"
	ReposListForAuthenticatedUserSortEnumPushed   ReposListForAuthenticatedUserSortEnum = "pushed"
	ReposListForAuthenticatedUserSortEnumFullName ReposListForAuthenticatedUserSortEnum = "full_name"
)

func (e ReposListForAuthenticatedUserSortEnum) ToPointer() *ReposListForAuthenticatedUserSortEnum {
	return &e
}

func (e *ReposListForAuthenticatedUserSortEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "created":
		fallthrough
	case "updated":
		fallthrough
	case "pushed":
		fallthrough
	case "full_name":
		*e = ReposListForAuthenticatedUserSortEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposListForAuthenticatedUserSortEnum: %v", v)
	}
}

// ReposListForAuthenticatedUserTypeEnum - Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
type ReposListForAuthenticatedUserTypeEnum string

const (
	ReposListForAuthenticatedUserTypeEnumAll     ReposListForAuthenticatedUserTypeEnum = "all"
	ReposListForAuthenticatedUserTypeEnumOwner   ReposListForAuthenticatedUserTypeEnum = "owner"
	ReposListForAuthenticatedUserTypeEnumPublic  ReposListForAuthenticatedUserTypeEnum = "public"
	ReposListForAuthenticatedUserTypeEnumPrivate ReposListForAuthenticatedUserTypeEnum = "private"
	ReposListForAuthenticatedUserTypeEnumMember  ReposListForAuthenticatedUserTypeEnum = "member"
)

func (e ReposListForAuthenticatedUserTypeEnum) ToPointer() *ReposListForAuthenticatedUserTypeEnum {
	return &e
}

func (e *ReposListForAuthenticatedUserTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "all":
		fallthrough
	case "owner":
		fallthrough
	case "public":
		fallthrough
	case "private":
		fallthrough
	case "member":
		*e = ReposListForAuthenticatedUserTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposListForAuthenticatedUserTypeEnum: %v", v)
	}
}

// ReposListForAuthenticatedUserVisibilityEnum - Limit results to repositories with the specified visibility.
type ReposListForAuthenticatedUserVisibilityEnum string

const (
	ReposListForAuthenticatedUserVisibilityEnumAll     ReposListForAuthenticatedUserVisibilityEnum = "all"
	ReposListForAuthenticatedUserVisibilityEnumPublic  ReposListForAuthenticatedUserVisibilityEnum = "public"
	ReposListForAuthenticatedUserVisibilityEnumPrivate ReposListForAuthenticatedUserVisibilityEnum = "private"
)

func (e ReposListForAuthenticatedUserVisibilityEnum) ToPointer() *ReposListForAuthenticatedUserVisibilityEnum {
	return &e
}

func (e *ReposListForAuthenticatedUserVisibilityEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "all":
		fallthrough
	case "public":
		fallthrough
	case "private":
		*e = ReposListForAuthenticatedUserVisibilityEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ReposListForAuthenticatedUserVisibilityEnum: %v", v)
	}
}

type ReposListForAuthenticatedUserRequest struct {
	// Comma-separated list of values. Can include:
	//  * `owner`: Repositories that are owned by the authenticated user.
	//  * `collaborator`: Repositories that the user has been added to as a collaborator.
	//  * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
	Affiliation *string `queryParam:"style=form,explode=true,name=affiliation"`
	// Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	Before *time.Time `queryParam:"style=form,explode=true,name=before"`
	// The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
	Direction *ReposListForAuthenticatedUserDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	Since *time.Time `queryParam:"style=form,explode=true,name=since"`
	// The property to sort the results by.
	Sort *ReposListForAuthenticatedUserSortEnum `queryParam:"style=form,explode=true,name=sort"`
	// Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
	Type *ReposListForAuthenticatedUserTypeEnum `queryParam:"style=form,explode=true,name=type"`
	// Limit results to repositories with the specified visibility.
	Visibility *ReposListForAuthenticatedUserVisibilityEnum `queryParam:"style=form,explode=true,name=visibility"`
}

type ReposListForAuthenticatedUserResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Requires authentication
	BasicError *shared.BasicError
	// Response
	Repositories []shared.Repository
	// Validation failed, or the endpoint has been spammed.
	ValidationError *shared.ValidationError
}
