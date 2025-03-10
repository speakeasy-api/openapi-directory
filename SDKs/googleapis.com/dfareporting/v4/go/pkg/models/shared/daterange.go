// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"openapi/pkg/types"
)

// DateRangeRelativeDateRangeEnum - The date range relative to the date of when the report is run.
type DateRangeRelativeDateRangeEnum string

const (
	DateRangeRelativeDateRangeEnumToday           DateRangeRelativeDateRangeEnum = "TODAY"
	DateRangeRelativeDateRangeEnumYesterday       DateRangeRelativeDateRangeEnum = "YESTERDAY"
	DateRangeRelativeDateRangeEnumWeekToDate      DateRangeRelativeDateRangeEnum = "WEEK_TO_DATE"
	DateRangeRelativeDateRangeEnumMonthToDate     DateRangeRelativeDateRangeEnum = "MONTH_TO_DATE"
	DateRangeRelativeDateRangeEnumQuarterToDate   DateRangeRelativeDateRangeEnum = "QUARTER_TO_DATE"
	DateRangeRelativeDateRangeEnumYearToDate      DateRangeRelativeDateRangeEnum = "YEAR_TO_DATE"
	DateRangeRelativeDateRangeEnumPreviousWeek    DateRangeRelativeDateRangeEnum = "PREVIOUS_WEEK"
	DateRangeRelativeDateRangeEnumPreviousMonth   DateRangeRelativeDateRangeEnum = "PREVIOUS_MONTH"
	DateRangeRelativeDateRangeEnumPreviousQuarter DateRangeRelativeDateRangeEnum = "PREVIOUS_QUARTER"
	DateRangeRelativeDateRangeEnumPreviousYear    DateRangeRelativeDateRangeEnum = "PREVIOUS_YEAR"
	DateRangeRelativeDateRangeEnumLast7Days       DateRangeRelativeDateRangeEnum = "LAST_7_DAYS"
	DateRangeRelativeDateRangeEnumLast30Days      DateRangeRelativeDateRangeEnum = "LAST_30_DAYS"
	DateRangeRelativeDateRangeEnumLast90Days      DateRangeRelativeDateRangeEnum = "LAST_90_DAYS"
	DateRangeRelativeDateRangeEnumLast365Days     DateRangeRelativeDateRangeEnum = "LAST_365_DAYS"
	DateRangeRelativeDateRangeEnumLast24Months    DateRangeRelativeDateRangeEnum = "LAST_24_MONTHS"
	DateRangeRelativeDateRangeEnumLast14Days      DateRangeRelativeDateRangeEnum = "LAST_14_DAYS"
	DateRangeRelativeDateRangeEnumLast60Days      DateRangeRelativeDateRangeEnum = "LAST_60_DAYS"
)

func (e DateRangeRelativeDateRangeEnum) ToPointer() *DateRangeRelativeDateRangeEnum {
	return &e
}

func (e *DateRangeRelativeDateRangeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "TODAY":
		fallthrough
	case "YESTERDAY":
		fallthrough
	case "WEEK_TO_DATE":
		fallthrough
	case "MONTH_TO_DATE":
		fallthrough
	case "QUARTER_TO_DATE":
		fallthrough
	case "YEAR_TO_DATE":
		fallthrough
	case "PREVIOUS_WEEK":
		fallthrough
	case "PREVIOUS_MONTH":
		fallthrough
	case "PREVIOUS_QUARTER":
		fallthrough
	case "PREVIOUS_YEAR":
		fallthrough
	case "LAST_7_DAYS":
		fallthrough
	case "LAST_30_DAYS":
		fallthrough
	case "LAST_90_DAYS":
		fallthrough
	case "LAST_365_DAYS":
		fallthrough
	case "LAST_24_MONTHS":
		fallthrough
	case "LAST_14_DAYS":
		fallthrough
	case "LAST_60_DAYS":
		*e = DateRangeRelativeDateRangeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DateRangeRelativeDateRangeEnum: %v", v)
	}
}

// DateRange - Represents a date range.
type DateRange struct {
	EndDate *types.Date `json:"endDate,omitempty"`
	// The kind of resource this is, in this case dfareporting#dateRange.
	Kind *string `json:"kind,omitempty"`
	// The date range relative to the date of when the report is run.
	RelativeDateRange *DateRangeRelativeDateRangeEnum `json:"relativeDateRange,omitempty"`
	StartDate         *types.Date                     `json:"startDate,omitempty"`
}
