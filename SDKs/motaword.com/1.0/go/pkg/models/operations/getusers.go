package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserTypeEnum string

const (
	GetUsersUserTypeEnumVendor GetUsersUserTypeEnum = "vendor"
	GetUsersUserTypeEnumAll    GetUsersUserTypeEnum = "all"
)

type GetUsersQueryParams struct {
	Page     *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64                `queryParam:"style=form,explode=true,name=per_page"`
	Search   *string               `queryParam:"style=form,explode=true,name=search"`
	UserType *GetUsersUserTypeEnum `queryParam:"style=form,explode=true,name=user_type"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
}

type GetUsersResponse struct {
	ContentType string
	StatusCode  int64
	UserList    *shared.UserList
}
