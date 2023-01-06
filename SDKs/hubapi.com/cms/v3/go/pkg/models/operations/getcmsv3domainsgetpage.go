package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCmsV3DomainsGetPageQueryParams struct {
	After         *string    `queryParam:"style=form,explode=true,name=after"`
	Archived      *bool      `queryParam:"style=form,explode=true,name=archived"`
	CreatedAfter  *time.Time `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedAt     *time.Time `queryParam:"style=form,explode=true,name=createdAt"`
	CreatedBefore *time.Time `queryParam:"style=form,explode=true,name=createdBefore"`
	Limit         *int32     `queryParam:"style=form,explode=true,name=limit"`
	Sort          []string   `queryParam:"style=form,explode=true,name=sort"`
	UpdatedAfter  *time.Time `queryParam:"style=form,explode=true,name=updatedAfter"`
	UpdatedAt     *time.Time `queryParam:"style=form,explode=true,name=updatedAt"`
	UpdatedBefore *time.Time `queryParam:"style=form,explode=true,name=updatedBefore"`
}

type GetCmsV3DomainsGetPageSecurity struct {
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2             *shared.SchemeOauth2            `security:"scheme,type=oauth2"`
	PrivateApps        *shared.SchemePrivateApps       `security:"scheme,type=apiKey,subtype=header"`
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateApps1       *shared.SchemePrivateApps       `security:"scheme,type=apiKey,subtype=header"`
	Oauth3             *shared.SchemeOauth2            `security:"scheme,type=oauth2"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetCmsV3DomainsGetPageRequest struct {
	QueryParams GetCmsV3DomainsGetPageQueryParams
	Security    GetCmsV3DomainsGetPageSecurity
}

type GetCmsV3DomainsGetPageResponse struct {
	Body                                           []byte
	CollectionResponseWithTotalDomainForwardPaging *shared.CollectionResponseWithTotalDomainForwardPaging
	ContentType                                    string
	StatusCode                                     int64
}
