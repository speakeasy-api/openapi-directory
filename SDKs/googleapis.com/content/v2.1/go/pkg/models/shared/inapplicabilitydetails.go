// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// InapplicabilityDetailsInapplicableReasonEnum - Reason code this rule was not applicable.
type InapplicabilityDetailsInapplicableReasonEnum string

const (
	InapplicabilityDetailsInapplicableReasonEnumInapplicableReasonUnspecified   InapplicabilityDetailsInapplicableReasonEnum = "INAPPLICABLE_REASON_UNSPECIFIED"
	InapplicabilityDetailsInapplicableReasonEnumCannotBeatBuyboxWinner          InapplicabilityDetailsInapplicableReasonEnum = "CANNOT_BEAT_BUYBOX_WINNER"
	InapplicabilityDetailsInapplicableReasonEnumAlreadyWinningBuybox            InapplicabilityDetailsInapplicableReasonEnum = "ALREADY_WINNING_BUYBOX"
	InapplicabilityDetailsInapplicableReasonEnumTriumphedOverBySameTypeRule     InapplicabilityDetailsInapplicableReasonEnum = "TRIUMPHED_OVER_BY_SAME_TYPE_RULE"
	InapplicabilityDetailsInapplicableReasonEnumTriumphedOverByOtherRuleOnOffer InapplicabilityDetailsInapplicableReasonEnum = "TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER"
	InapplicabilityDetailsInapplicableReasonEnumRestrictionsNotMet              InapplicabilityDetailsInapplicableReasonEnum = "RESTRICTIONS_NOT_MET"
	InapplicabilityDetailsInapplicableReasonEnumUncategorized                   InapplicabilityDetailsInapplicableReasonEnum = "UNCATEGORIZED"
	InapplicabilityDetailsInapplicableReasonEnumInvalidAutoPriceMin             InapplicabilityDetailsInapplicableReasonEnum = "INVALID_AUTO_PRICE_MIN"
	InapplicabilityDetailsInapplicableReasonEnumInvalidFloorConfig              InapplicabilityDetailsInapplicableReasonEnum = "INVALID_FLOOR_CONFIG"
)

func (e InapplicabilityDetailsInapplicableReasonEnum) ToPointer() *InapplicabilityDetailsInapplicableReasonEnum {
	return &e
}

func (e *InapplicabilityDetailsInapplicableReasonEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "INAPPLICABLE_REASON_UNSPECIFIED":
		fallthrough
	case "CANNOT_BEAT_BUYBOX_WINNER":
		fallthrough
	case "ALREADY_WINNING_BUYBOX":
		fallthrough
	case "TRIUMPHED_OVER_BY_SAME_TYPE_RULE":
		fallthrough
	case "TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER":
		fallthrough
	case "RESTRICTIONS_NOT_MET":
		fallthrough
	case "UNCATEGORIZED":
		fallthrough
	case "INVALID_AUTO_PRICE_MIN":
		fallthrough
	case "INVALID_FLOOR_CONFIG":
		*e = InapplicabilityDetailsInapplicableReasonEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for InapplicabilityDetailsInapplicableReasonEnum: %v", v)
	}
}

// InapplicabilityDetails - Map of inapplicability details.
type InapplicabilityDetails struct {
	// Count of this inapplicable reason code.
	InapplicableCount *string `json:"inapplicableCount,omitempty"`
	// Reason code this rule was not applicable.
	InapplicableReason *InapplicabilityDetailsInapplicableReasonEnum `json:"inapplicableReason,omitempty"`
}
