// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type WindowsUpdateSettingsClassificationsEnum string

const (
	WindowsUpdateSettingsClassificationsEnumClassificationUnspecified WindowsUpdateSettingsClassificationsEnum = "CLASSIFICATION_UNSPECIFIED"
	WindowsUpdateSettingsClassificationsEnumCritical                  WindowsUpdateSettingsClassificationsEnum = "CRITICAL"
	WindowsUpdateSettingsClassificationsEnumSecurity                  WindowsUpdateSettingsClassificationsEnum = "SECURITY"
	WindowsUpdateSettingsClassificationsEnumDefinition                WindowsUpdateSettingsClassificationsEnum = "DEFINITION"
	WindowsUpdateSettingsClassificationsEnumDriver                    WindowsUpdateSettingsClassificationsEnum = "DRIVER"
	WindowsUpdateSettingsClassificationsEnumFeaturePack               WindowsUpdateSettingsClassificationsEnum = "FEATURE_PACK"
	WindowsUpdateSettingsClassificationsEnumServicePack               WindowsUpdateSettingsClassificationsEnum = "SERVICE_PACK"
	WindowsUpdateSettingsClassificationsEnumTool                      WindowsUpdateSettingsClassificationsEnum = "TOOL"
	WindowsUpdateSettingsClassificationsEnumUpdateRollup              WindowsUpdateSettingsClassificationsEnum = "UPDATE_ROLLUP"
	WindowsUpdateSettingsClassificationsEnumUpdate                    WindowsUpdateSettingsClassificationsEnum = "UPDATE"
)

func (e WindowsUpdateSettingsClassificationsEnum) ToPointer() *WindowsUpdateSettingsClassificationsEnum {
	return &e
}

func (e *WindowsUpdateSettingsClassificationsEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CLASSIFICATION_UNSPECIFIED":
		fallthrough
	case "CRITICAL":
		fallthrough
	case "SECURITY":
		fallthrough
	case "DEFINITION":
		fallthrough
	case "DRIVER":
		fallthrough
	case "FEATURE_PACK":
		fallthrough
	case "SERVICE_PACK":
		fallthrough
	case "TOOL":
		fallthrough
	case "UPDATE_ROLLUP":
		fallthrough
	case "UPDATE":
		*e = WindowsUpdateSettingsClassificationsEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for WindowsUpdateSettingsClassificationsEnum: %v", v)
	}
}

// WindowsUpdateSettings - Windows patching is performed using the Windows Update Agent.
type WindowsUpdateSettings struct {
	// Only apply updates of these windows update classifications. If empty, all updates are applied.
	Classifications []WindowsUpdateSettingsClassificationsEnum `json:"classifications,omitempty"`
	// List of KBs to exclude from update.
	Excludes []string `json:"excludes,omitempty"`
	// An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations.
	ExclusivePatches []string `json:"exclusivePatches,omitempty"`
}
