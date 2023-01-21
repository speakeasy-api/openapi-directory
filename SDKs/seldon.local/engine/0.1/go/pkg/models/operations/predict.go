package operations

import (
	"openapi/pkg/models/shared"
)

type PredictPathParams struct {
	Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
	Namespace  string `pathParam:"style=simple,explode=false,name=namespace"`
}

type PredictRequests struct {
	ApplicationOctetStream []byte                `request:"mediaType=application/octet-stream"`
	SeldonMessage          *shared.SeldonMessage `request:"mediaType=application/json"`
	String                 *string               `request:"mediaType=text/*"`
}

type PredictSecurity struct {
	HTTPBearer shared.SchemeHTTPBearer `security:"scheme,type=http,subtype=bearer"`
}

type PredictRequest struct {
	PathParams PredictPathParams
	Request    PredictRequests
	Security   PredictSecurity
}

type PredictResponse struct {
	ContentType   string
	SeldonMessage *shared.SeldonMessage
	StatusCode    int64
}
