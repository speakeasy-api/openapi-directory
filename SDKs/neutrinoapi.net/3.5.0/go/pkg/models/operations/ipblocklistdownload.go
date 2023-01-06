package operations

import (
	"openapi/pkg/models/shared"
)

type IPBlocklistDownloadRequestBody struct {
	Format     *string `form:"name=format"`
	IncludeVpn *bool   `form:"name=include-vpn"`
}

type IPBlocklistDownloadRequest struct {
	Request *IPBlocklistDownloadRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type IPBlocklistDownloadResponse struct {
	APIError                                          *shared.APIError
	ContentType                                       string
	IPBlocklistDownload200ApplicationJSONBinaryString []byte
	StatusCode                                        int64
}
