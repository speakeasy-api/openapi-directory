// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ExitEventTypeEnum - Required. The type of the exit event.
type ExitEventTypeEnum string

const (
	ExitEventTypeEnumExitEventTypeUnspecified ExitEventTypeEnum = "EXIT_EVENT_TYPE_UNSPECIFIED"
	ExitEventTypeEnumExitEventTypeDefault     ExitEventTypeEnum = "EXIT_EVENT_TYPE_DEFAULT"
	ExitEventTypeEnumExitEventTypeBackup      ExitEventTypeEnum = "EXIT_EVENT_TYPE_BACKUP"
)

func (e ExitEventTypeEnum) ToPointer() *ExitEventTypeEnum {
	return &e
}

func (e *ExitEventTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "EXIT_EVENT_TYPE_UNSPECIFIED":
		fallthrough
	case "EXIT_EVENT_TYPE_DEFAULT":
		fallthrough
	case "EXIT_EVENT_TYPE_BACKUP":
		*e = ExitEventTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ExitEventTypeEnum: %v", v)
	}
}

// ExitEvent - Exit event of the creative.
type ExitEvent struct {
	// The name of the click tag of the exit event. The name must be unique within one creative. Leave it empty or unset for creatives containing image assets only.
	Name *string `json:"name,omitempty"`
	// The name used to identify this event in reports. Leave it empty or unset for creatives containing image assets only.
	ReportingName *string `json:"reportingName,omitempty"`
	// Required. The type of the exit event.
	Type *ExitEventTypeEnum `json:"type,omitempty"`
	// Required. The click through URL of the exit event. This is required when type is: * `EXIT_EVENT_TYPE_DEFAULT` * `EXIT_EVENT_TYPE_BACKUP`
	URL *string `json:"url,omitempty"`
}
