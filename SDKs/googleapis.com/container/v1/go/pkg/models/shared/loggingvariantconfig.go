// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// LoggingVariantConfigVariantEnum - Logging variant deployed on nodes.
type LoggingVariantConfigVariantEnum string

const (
	LoggingVariantConfigVariantEnumVariantUnspecified LoggingVariantConfigVariantEnum = "VARIANT_UNSPECIFIED"
	LoggingVariantConfigVariantEnumDefault            LoggingVariantConfigVariantEnum = "DEFAULT"
	LoggingVariantConfigVariantEnumMaxThroughput      LoggingVariantConfigVariantEnum = "MAX_THROUGHPUT"
)

func (e LoggingVariantConfigVariantEnum) ToPointer() *LoggingVariantConfigVariantEnum {
	return &e
}

func (e *LoggingVariantConfigVariantEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "VARIANT_UNSPECIFIED":
		fallthrough
	case "DEFAULT":
		fallthrough
	case "MAX_THROUGHPUT":
		*e = LoggingVariantConfigVariantEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for LoggingVariantConfigVariantEnum: %v", v)
	}
}

// LoggingVariantConfig - LoggingVariantConfig specifies the behaviour of the logging component.
type LoggingVariantConfig struct {
	// Logging variant deployed on nodes.
	Variant *LoggingVariantConfigVariantEnum `json:"variant,omitempty"`
}
