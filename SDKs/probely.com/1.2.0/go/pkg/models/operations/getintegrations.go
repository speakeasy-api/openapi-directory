package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrations401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrations403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsResponse struct {
	ContentType                             string
	Integrations                            *shared.Integrations
	StatusCode                              int64
	GetIntegrations401ApplicationJSONObject *GetIntegrations401ApplicationJSON
	GetIntegrations403ApplicationJSONObject *GetIntegrations403ApplicationJSON
}
