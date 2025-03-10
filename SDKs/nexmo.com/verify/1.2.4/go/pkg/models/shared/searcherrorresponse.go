// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// SearchErrorResponseStatusEnum - Code | Description
// -- | --
// IN PROGRESS | The search is still in progress.
// SUCCESS | Your user entered a correct verification code.
// FAILED | Your user entered an incorrect code more than three times.
// EXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.
// CANCELLED | The verification process was cancelled by a Verify control request.
// 101 | You supplied an invalid `request_id`, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.
type SearchErrorResponseStatusEnum string

const (
	SearchErrorResponseStatusEnumInProgress       SearchErrorResponseStatusEnum = "IN PROGRESS"
	SearchErrorResponseStatusEnumFailed           SearchErrorResponseStatusEnum = "FAILED"
	SearchErrorResponseStatusEnumExpired          SearchErrorResponseStatusEnum = "EXPIRED"
	SearchErrorResponseStatusEnumCancelled        SearchErrorResponseStatusEnum = "CANCELLED"
	SearchErrorResponseStatusEnumOneHundredAndOne SearchErrorResponseStatusEnum = "101"
)

func (e SearchErrorResponseStatusEnum) ToPointer() *SearchErrorResponseStatusEnum {
	return &e
}

func (e *SearchErrorResponseStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "IN PROGRESS":
		fallthrough
	case "FAILED":
		fallthrough
	case "EXPIRED":
		fallthrough
	case "CANCELLED":
		fallthrough
	case "101":
		*e = SearchErrorResponseStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SearchErrorResponseStatusEnum: %v", v)
	}
}

// SearchErrorResponse - Error
type SearchErrorResponse struct {
	// If `status` is not `SUCCESS`, this message explains the issue encountered.
	ErrorText *string `json:"error_text,omitempty"`
	// The `request_id` that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation.
	RequestID *string `json:"request_id,omitempty"`
	// Code | Description
	// -- | --
	// IN PROGRESS | The search is still in progress.
	// SUCCESS | Your user entered a correct verification code.
	// FAILED | Your user entered an incorrect code more than three times.
	// EXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.
	// CANCELLED | The verification process was cancelled by a Verify control request.
	// 101 | You supplied an invalid `request_id`, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.
	//
	Status *SearchErrorResponseStatusEnum `json:"status,omitempty"`
}
