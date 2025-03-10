// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type SecretScanningListAlertsForRepoRequest struct {
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
	// A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
	Resolution *string `queryParam:"style=form,explode=true,name=resolution"`
	// A comma-separated list of secret types to return. By default all secret types are returned.
	// See "[Secret scanning patterns](https://docs.github.com/enterprise-server@3.3/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
	// for a complete list of secret types.
	SecretType *string `queryParam:"style=form,explode=true,name=secret_type"`
	// Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
	State *shared.SecretScanningAlertStateEnum `queryParam:"style=form,explode=true,name=state"`
}

// SecretScanningListAlertsForRepo503ApplicationJSON - Service unavailable
type SecretScanningListAlertsForRepo503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type SecretScanningListAlertsForRepoResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	SecretScanningAlerts []shared.SecretScanningAlert
	// Service unavailable
	SecretScanningListAlertsForRepo503ApplicationJSONObject *SecretScanningListAlertsForRepo503ApplicationJSON
}
