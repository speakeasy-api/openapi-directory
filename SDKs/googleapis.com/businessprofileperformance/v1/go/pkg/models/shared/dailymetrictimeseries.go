// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// DailyMetricTimeSeriesDailyMetricEnum - The DailyMetric that the TimeSeries represents.
type DailyMetricTimeSeriesDailyMetricEnum string

const (
	DailyMetricTimeSeriesDailyMetricEnumDailyMetricUnknown               DailyMetricTimeSeriesDailyMetricEnum = "DAILY_METRIC_UNKNOWN"
	DailyMetricTimeSeriesDailyMetricEnumBusinessImpressionsDesktopMaps   DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
	DailyMetricTimeSeriesDailyMetricEnumBusinessImpressionsDesktopSearch DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
	DailyMetricTimeSeriesDailyMetricEnumBusinessImpressionsMobileMaps    DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
	DailyMetricTimeSeriesDailyMetricEnumBusinessImpressionsMobileSearch  DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
	DailyMetricTimeSeriesDailyMetricEnumBusinessConversations            DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_CONVERSATIONS"
	DailyMetricTimeSeriesDailyMetricEnumBusinessDirectionRequests        DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_DIRECTION_REQUESTS"
	DailyMetricTimeSeriesDailyMetricEnumCallClicks                       DailyMetricTimeSeriesDailyMetricEnum = "CALL_CLICKS"
	DailyMetricTimeSeriesDailyMetricEnumWebsiteClicks                    DailyMetricTimeSeriesDailyMetricEnum = "WEBSITE_CLICKS"
	DailyMetricTimeSeriesDailyMetricEnumBusinessBookings                 DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_BOOKINGS"
	DailyMetricTimeSeriesDailyMetricEnumBusinessFoodOrders               DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_FOOD_ORDERS"
	DailyMetricTimeSeriesDailyMetricEnumBusinessFoodMenuClicks           DailyMetricTimeSeriesDailyMetricEnum = "BUSINESS_FOOD_MENU_CLICKS"
)

func (e DailyMetricTimeSeriesDailyMetricEnum) ToPointer() *DailyMetricTimeSeriesDailyMetricEnum {
	return &e
}

func (e *DailyMetricTimeSeriesDailyMetricEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DAILY_METRIC_UNKNOWN":
		fallthrough
	case "BUSINESS_IMPRESSIONS_DESKTOP_MAPS":
		fallthrough
	case "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH":
		fallthrough
	case "BUSINESS_IMPRESSIONS_MOBILE_MAPS":
		fallthrough
	case "BUSINESS_IMPRESSIONS_MOBILE_SEARCH":
		fallthrough
	case "BUSINESS_CONVERSATIONS":
		fallthrough
	case "BUSINESS_DIRECTION_REQUESTS":
		fallthrough
	case "CALL_CLICKS":
		fallthrough
	case "WEBSITE_CLICKS":
		fallthrough
	case "BUSINESS_BOOKINGS":
		fallthrough
	case "BUSINESS_FOOD_ORDERS":
		fallthrough
	case "BUSINESS_FOOD_MENU_CLICKS":
		*e = DailyMetricTimeSeriesDailyMetricEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DailyMetricTimeSeriesDailyMetricEnum: %v", v)
	}
}

// DailyMetricTimeSeries - Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple.
type DailyMetricTimeSeries struct {
	// The DailyMetric that the TimeSeries represents.
	DailyMetric *DailyMetricTimeSeriesDailyMetricEnum `json:"dailyMetric,omitempty"`
	// Represents all possible subentity types that are associated with DailyMetrics.
	DailySubEntityType *DailySubEntityType `json:"dailySubEntityType,omitempty"`
	// Represents a timeseries.
	TimeSeries *TimeSeries `json:"timeSeries,omitempty"`
}
