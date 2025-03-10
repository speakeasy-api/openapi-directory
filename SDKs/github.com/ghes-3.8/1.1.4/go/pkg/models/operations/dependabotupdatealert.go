// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DependabotUpdateAlertRequestBodyDismissedReasonEnum - **Required when `state` is `dismissed`.** A reason for dismissing the alert.
type DependabotUpdateAlertRequestBodyDismissedReasonEnum string

const (
	DependabotUpdateAlertRequestBodyDismissedReasonEnumFixStarted    DependabotUpdateAlertRequestBodyDismissedReasonEnum = "fix_started"
	DependabotUpdateAlertRequestBodyDismissedReasonEnumInaccurate    DependabotUpdateAlertRequestBodyDismissedReasonEnum = "inaccurate"
	DependabotUpdateAlertRequestBodyDismissedReasonEnumNoBandwidth   DependabotUpdateAlertRequestBodyDismissedReasonEnum = "no_bandwidth"
	DependabotUpdateAlertRequestBodyDismissedReasonEnumNotUsed       DependabotUpdateAlertRequestBodyDismissedReasonEnum = "not_used"
	DependabotUpdateAlertRequestBodyDismissedReasonEnumTolerableRisk DependabotUpdateAlertRequestBodyDismissedReasonEnum = "tolerable_risk"
)

func (e DependabotUpdateAlertRequestBodyDismissedReasonEnum) ToPointer() *DependabotUpdateAlertRequestBodyDismissedReasonEnum {
	return &e
}

func (e *DependabotUpdateAlertRequestBodyDismissedReasonEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "fix_started":
		fallthrough
	case "inaccurate":
		fallthrough
	case "no_bandwidth":
		fallthrough
	case "not_used":
		fallthrough
	case "tolerable_risk":
		*e = DependabotUpdateAlertRequestBodyDismissedReasonEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DependabotUpdateAlertRequestBodyDismissedReasonEnum: %v", v)
	}
}

// DependabotUpdateAlertRequestBodyStateEnum - The state of the Dependabot alert.
// A `dismissed_reason` must be provided when setting the state to `dismissed`.
type DependabotUpdateAlertRequestBodyStateEnum string

const (
	DependabotUpdateAlertRequestBodyStateEnumDismissed DependabotUpdateAlertRequestBodyStateEnum = "dismissed"
	DependabotUpdateAlertRequestBodyStateEnumOpen      DependabotUpdateAlertRequestBodyStateEnum = "open"
)

func (e DependabotUpdateAlertRequestBodyStateEnum) ToPointer() *DependabotUpdateAlertRequestBodyStateEnum {
	return &e
}

func (e *DependabotUpdateAlertRequestBodyStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "dismissed":
		fallthrough
	case "open":
		*e = DependabotUpdateAlertRequestBodyStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DependabotUpdateAlertRequestBodyStateEnum: %v", v)
	}
}

type DependabotUpdateAlertRequestBody struct {
	// An optional comment associated with dismissing the alert.
	DismissedComment *string `json:"dismissed_comment,omitempty"`
	// **Required when `state` is `dismissed`.** A reason for dismissing the alert.
	DismissedReason *DependabotUpdateAlertRequestBodyDismissedReasonEnum `json:"dismissed_reason,omitempty"`
	// The state of the Dependabot alert.
	// A `dismissed_reason` must be provided when setting the state to `dismissed`.
	State DependabotUpdateAlertRequestBodyStateEnum `json:"state"`
}

type DependabotUpdateAlertRequest struct {
	RequestBody DependabotUpdateAlertRequestBody `request:"mediaType=application/json"`
	// The number that identifies a Dependabot alert in its repository.
	// You can find this at the end of the URL for a Dependabot alert within GitHub,
	// or in `number` fields in the response from the
	// `GET /repos/{owner}/{repo}/dependabot/alerts` operation.
	AlertNumber int64 `pathParam:"style=simple,explode=false,name=alert_number"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type DependabotUpdateAlertResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Bad Request
	BasicError *shared.BasicError
	// Response
	DependabotAlert *shared.DependabotAlert
	// Bad Request
	ScimError *shared.ScimError
	// Validation failed, or the endpoint has been spammed.
	ValidationErrorSimple *shared.ValidationErrorSimple
}
