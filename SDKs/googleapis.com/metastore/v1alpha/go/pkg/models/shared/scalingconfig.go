// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ScalingConfigInstanceSizeEnum - An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
type ScalingConfigInstanceSizeEnum string

const (
	ScalingConfigInstanceSizeEnumInstanceSizeUnspecified ScalingConfigInstanceSizeEnum = "INSTANCE_SIZE_UNSPECIFIED"
	ScalingConfigInstanceSizeEnumExtraSmall              ScalingConfigInstanceSizeEnum = "EXTRA_SMALL"
	ScalingConfigInstanceSizeEnumSmall                   ScalingConfigInstanceSizeEnum = "SMALL"
	ScalingConfigInstanceSizeEnumMedium                  ScalingConfigInstanceSizeEnum = "MEDIUM"
	ScalingConfigInstanceSizeEnumLarge                   ScalingConfigInstanceSizeEnum = "LARGE"
	ScalingConfigInstanceSizeEnumExtraLarge              ScalingConfigInstanceSizeEnum = "EXTRA_LARGE"
)

func (e ScalingConfigInstanceSizeEnum) ToPointer() *ScalingConfigInstanceSizeEnum {
	return &e
}

func (e *ScalingConfigInstanceSizeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "INSTANCE_SIZE_UNSPECIFIED":
		fallthrough
	case "EXTRA_SMALL":
		fallthrough
	case "SMALL":
		fallthrough
	case "MEDIUM":
		fallthrough
	case "LARGE":
		fallthrough
	case "EXTRA_LARGE":
		*e = ScalingConfigInstanceSizeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ScalingConfigInstanceSizeEnum: %v", v)
	}
}

// ScalingConfig - Represents the scaling configuration of a metastore service.
type ScalingConfig struct {
	// An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
	InstanceSize *ScalingConfigInstanceSizeEnum `json:"instanceSize,omitempty"`
	// Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.
	ScalingFactor *float32 `json:"scalingFactor,omitempty"`
}
