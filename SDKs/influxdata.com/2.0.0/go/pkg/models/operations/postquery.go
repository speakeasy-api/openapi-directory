package operations

import (
	"openapi/pkg/models/shared"
)

type PostQueryQueryParams struct {
	Org   *string `queryParam:"style=form,explode=true,name=org"`
	OrgID *string `queryParam:"style=form,explode=true,name=orgID"`
}

type PostQueryHeaders struct {
	AcceptEncoding *shared.TraceSpanEnum1 `header:"style=simple,explode=false,name=Accept-Encoding"`
	ContentType    *shared.TraceSpanEnum2 `header:"style=simple,explode=false,name=Content-Type"`
	ZapTraceSpan   *string                `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostQueryRequests struct {
	OneOf  *interface{} `request:"mediaType=application/json"`
	String *string      `request:"mediaType=application/vnd.flux"`
}

type PostQueryRequest struct {
	QueryParams PostQueryQueryParams
	Headers     PostQueryHeaders
	Request     *PostQueryRequests
}

type PostQueryResponse struct {
	ContentType                                       string
	Error                                             *interface{}
	Headers                                           map[string][]string
	PostQuery200ApplicationVndInfluxArrowBinaryString []byte
	PostQuery200TextCsvString                         *string
	StatusCode                                        int64
}
