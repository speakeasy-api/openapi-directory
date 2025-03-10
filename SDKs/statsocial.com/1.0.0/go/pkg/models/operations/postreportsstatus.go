// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostReportsStatusRequest struct {
	// Unique hash belonging to report
	ReportHash string `queryParam:"style=form,explode=true,name=report_hash"`
}

type PostReportsStatusResponse struct {
	// Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}
	FourHundredError *shared.FourHundredError
	// {success: 0, msg: Invalid API key, error_code_msg: API_INVALID_KEY}
	FourHundredAndOneError *shared.FourHundredAndOneError
	// {success: 0, msg: you are going too fast}
	FourHundredAndThreeError *shared.FourHundredAndThreeError
	// Possible reasons include:<br>{success: 0, msg: Error getting application's credentials, error_code_msg: API_ERROR_GETTING_APPLICATION_INFO}<br>{success: 0, msg: Internal database error, error_code_msg: API_ERROR_DATABASE_INITIATION_ERROR}<br>{success: 0, msg: Report has no data, error_code_msg: API_ERROR_EMPTY_REPORT}
	FiveHundredError *shared.FiveHundredError
	ContentType      string
	// Success
	ReportStatus *shared.ReportStatus
	StatusCode   int
	RawResponse  *http.Response
}
