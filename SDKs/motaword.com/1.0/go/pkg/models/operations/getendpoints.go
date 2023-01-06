package operations

import (
	"openapi/pkg/models/shared"
)

type GetEndpointsResponse struct {
	ContentType                          string
	Error                                *shared.Error
	StatusCode                           int64
	GetEndpoints200ApplicationJSONObject map[string]interface{}
}
