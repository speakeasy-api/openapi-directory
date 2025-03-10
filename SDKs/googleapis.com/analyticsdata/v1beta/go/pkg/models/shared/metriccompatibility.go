// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// MetricCompatibilityCompatibilityEnum - The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report.
type MetricCompatibilityCompatibilityEnum string

const (
	MetricCompatibilityCompatibilityEnumCompatibilityUnspecified MetricCompatibilityCompatibilityEnum = "COMPATIBILITY_UNSPECIFIED"
	MetricCompatibilityCompatibilityEnumCompatible               MetricCompatibilityCompatibilityEnum = "COMPATIBLE"
	MetricCompatibilityCompatibilityEnumIncompatible             MetricCompatibilityCompatibilityEnum = "INCOMPATIBLE"
)

func (e MetricCompatibilityCompatibilityEnum) ToPointer() *MetricCompatibilityCompatibilityEnum {
	return &e
}

func (e *MetricCompatibilityCompatibilityEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "COMPATIBILITY_UNSPECIFIED":
		fallthrough
	case "COMPATIBLE":
		fallthrough
	case "INCOMPATIBLE":
		*e = MetricCompatibilityCompatibilityEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for MetricCompatibilityCompatibilityEnum: %v", v)
	}
}

// MetricCompatibility - The compatibility for a single metric.
type MetricCompatibility struct {
	// The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report.
	Compatibility *MetricCompatibilityCompatibilityEnum `json:"compatibility,omitempty"`
	// Explains a metric.
	MetricMetadata *MetricMetadata `json:"metricMetadata,omitempty"`
}
