package operations

import (
	"openapi/pkg/models/shared"
)

type GetCmsV3DomainsDomainIDGetByIDPathParams struct {
	DomainID string `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetCmsV3DomainsDomainIDGetByIDSecurity struct {
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

type GetCmsV3DomainsDomainIDGetByIDRequest struct {
	PathParams GetCmsV3DomainsDomainIDGetByIDPathParams
	Security   GetCmsV3DomainsDomainIDGetByIDSecurity
}

type GetCmsV3DomainsDomainIDGetByIDResponse struct {
	Body        []byte
	ContentType string
	Domain      *shared.Domain
	StatusCode  int64
}
