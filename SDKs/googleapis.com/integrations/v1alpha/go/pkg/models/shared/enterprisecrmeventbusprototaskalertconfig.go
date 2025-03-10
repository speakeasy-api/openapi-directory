// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum string

const (
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumMetricTypeUnspecified  EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskErrorRate          EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_ERROR_RATE"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskWarningRate        EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_WARNING_RATE"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskRate               EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_RATE"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskAverageDuration    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_AVERAGE_DURATION"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskPercentileDuration EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_PERCENTILE_DURATION"
)

func (e EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum) ToPointer() *EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum {
	return &e
}

func (e *EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "METRIC_TYPE_UNSPECIFIED":
		fallthrough
	case "TASK_ERROR_RATE":
		fallthrough
	case "TASK_WARNING_RATE":
		fallthrough
	case "TASK_RATE":
		fallthrough
	case "TASK_AVERAGE_DURATION":
		fallthrough
	case "TASK_PERCENTILE_DURATION":
		*e = EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum: %v", v)
	}
}

// EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum - The threshold type for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired.
type EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum string

const (
	EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumUnspecifiedThresholdType EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "UNSPECIFIED_THRESHOLD_TYPE"
	EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMin              EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "EXPECTED_MIN"
	EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMax              EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "EXPECTED_MAX"
)

func (e EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum) ToPointer() *EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum {
	return &e
}

func (e *EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "UNSPECIFIED_THRESHOLD_TYPE":
		fallthrough
	case "EXPECTED_MIN":
		fallthrough
	case "EXPECTED_MAX":
		*e = EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum: %v", v)
	}
}

// EnterpriseCrmEventbusProtoTaskAlertConfig - Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event.
type EnterpriseCrmEventbusProtoTaskAlertConfig struct {
	// The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week).
	AggregationPeriod *string `json:"aggregationPeriod,omitempty"`
	// Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert.
	AlertDisabled *bool `json:"alertDisabled,omitempty"`
	// A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique in within the scope of the containing workflow.
	AlertName *string `json:"alertName,omitempty"`
	// Client associated with this alert configuration. Must be a client enabled in one of the containing workflow's triggers.
	ClientID *string `json:"clientId,omitempty"`
	// Should be specified only for TASK_AVERAGE_DURATION and TASK_PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger.
	DurationThresholdMs *string `json:"durationThresholdMs,omitempty"`
	// List of error enums for alerts.
	ErrorEnumList *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList  `json:"errorEnumList,omitempty"`
	MetricType    *EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum `json:"metricType,omitempty"`
	// For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.
	NumAggregationPeriods *int `json:"numAggregationPeriods,omitempty"`
	// Only count final task attempts, not retries.
	OnlyFinalAttempt *bool `json:"onlyFinalAttempt,omitempty"`
	// Link to a playbook for resolving the issue that triggered this alert.
	PlaybookURL *string `json:"playbookUrl,omitempty"`
	// The threshold type for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired.
	ThresholdType *EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum `json:"thresholdType,omitempty"`
	// The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig.
	ThresholdValue *EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue `json:"thresholdValue,omitempty"`
	// List of error enums for alerts.
	WarningEnumList *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList `json:"warningEnumList,omitempty"`
}
