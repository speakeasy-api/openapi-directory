package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackCollectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTrackCollectionEmbedEnum string

const (
	GetTrackCollectionEmbedEnumShareCode GetTrackCollectionEmbedEnum = "share_code"
	GetTrackCollectionEmbedEnumShareURL  GetTrackCollectionEmbedEnum = "share_url"
)

type GetTrackCollectionQueryParams struct {
	Embed     []GetTrackCollectionEmbedEnum `queryParam:"style=form,explode=true,name=embed"`
	ShareCode *string                       `queryParam:"style=form,explode=true,name=share_code"`
}

type GetTrackCollectionSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetTrackCollectionRequest struct {
	PathParams  GetTrackCollectionPathParams
	QueryParams GetTrackCollectionQueryParams
	Security    GetTrackCollectionSecurity
}

type GetTrackCollectionResponse struct {
	Collection  *shared.Collection
	ContentType string
	StatusCode  int64
}
