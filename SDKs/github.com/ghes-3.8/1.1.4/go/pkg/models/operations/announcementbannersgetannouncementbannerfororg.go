// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type AnnouncementBannersGetAnnouncementBannerForOrgRequest struct {
	// The organization name. The name is not case sensitive.
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type AnnouncementBannersGetAnnouncementBannerForOrgResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	AnnouncementBanner *shared.AnnouncementBanner
}
