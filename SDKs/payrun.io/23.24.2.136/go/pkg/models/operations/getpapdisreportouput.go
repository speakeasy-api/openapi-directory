// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

type GetPapdisReportOuputRequest struct {
	// The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
	APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
	// The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	// The employer unique key. E.g. ER001
	EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
	// Specific to PAPDIS report, specifies the business function that the sender is requesting. If left BLANK it will be assumed to be 0 (Enrol / Receive Contributions).
	MessageFunctionCode string `queryParam:"style=form,explode=true,name=MessageFunctionCode"`
	// The pay schedule unique key. E.g. SCH001
	PayScheduleKey string `queryParam:"style=form,explode=true,name=PayScheduleKey"`
	// The payment date context for the report. E.g. 2018-04-30
	PaymentDate *types.Date `queryParam:"style=form,explode=true,name=PaymentDate"`
	// The pension scheme unique key. E.g. PENSCH001
	PensionKey string `queryParam:"style=form,explode=true,name=PensionKey"`
	// The tax year. E.g. 2017 = 2017/18 year.
	TaxYear string `queryParam:"style=form,explode=true,name=TaxYear"`
	// The transform definition unique key. E.g. P45-Pdf
	TransformDefinitionKey *string `queryParam:"style=form,explode=true,name=TransformDefinitionKey"`
}

type GetPapdisReportOuputResponse struct {
	ContentType string
	// Bad Request
	ErrorModel *shared.ErrorModel
	// The result of the PAPDIS report execution
	GetPapdisReportOuput200ApplicationJSONBinaryString []byte
	StatusCode                                         int
	RawResponse                                        *http.Response
}
