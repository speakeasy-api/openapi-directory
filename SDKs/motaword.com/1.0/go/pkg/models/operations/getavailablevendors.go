package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableVendorsWithEnum string

const (
	GetAvailableVendorsWithEnumUser GetAvailableVendorsWithEnum = "user"
)

type GetAvailableVendorsQueryParams struct {
	With []GetAvailableVendorsWithEnum `queryParam:"style=form,explode=true,name=with[]"`
}

type GetAvailableVendorsRequest struct {
	QueryParams GetAvailableVendorsQueryParams
	Request     *shared.AvailableVendorsFilter `request:"mediaType=application/json"`
}

type GetAvailableVendorsResponse struct {
	ContentType string
	StatusCode  int64
	UserList    *shared.UserList
}
