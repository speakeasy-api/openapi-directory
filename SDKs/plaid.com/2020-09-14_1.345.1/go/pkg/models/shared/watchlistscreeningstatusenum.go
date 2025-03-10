// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// WatchlistScreeningStatusEnum - A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.
type WatchlistScreeningStatusEnum string

const (
	WatchlistScreeningStatusEnumRejected      WatchlistScreeningStatusEnum = "rejected"
	WatchlistScreeningStatusEnumPendingReview WatchlistScreeningStatusEnum = "pending_review"
	WatchlistScreeningStatusEnumCleared       WatchlistScreeningStatusEnum = "cleared"
)

func (e WatchlistScreeningStatusEnum) ToPointer() *WatchlistScreeningStatusEnum {
	return &e
}

func (e *WatchlistScreeningStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "rejected":
		fallthrough
	case "pending_review":
		fallthrough
	case "cleared":
		*e = WatchlistScreeningStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for WatchlistScreeningStatusEnum: %v", v)
	}
}
