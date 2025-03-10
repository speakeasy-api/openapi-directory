// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ActionHookActionBodyHTTPMethodEnum string

const (
	ActionHookActionBodyHTTPMethodEnumConnect ActionHookActionBodyHTTPMethodEnum = "CONNECT"
	ActionHookActionBodyHTTPMethodEnumDelete  ActionHookActionBodyHTTPMethodEnum = "DELETE"
	ActionHookActionBodyHTTPMethodEnumGet     ActionHookActionBodyHTTPMethodEnum = "GET"
	ActionHookActionBodyHTTPMethodEnumHead    ActionHookActionBodyHTTPMethodEnum = "HEAD"
	ActionHookActionBodyHTTPMethodEnumOptions ActionHookActionBodyHTTPMethodEnum = "OPTIONS"
	ActionHookActionBodyHTTPMethodEnumPatch   ActionHookActionBodyHTTPMethodEnum = "PATCH"
	ActionHookActionBodyHTTPMethodEnumPost    ActionHookActionBodyHTTPMethodEnum = "POST"
	ActionHookActionBodyHTTPMethodEnumPut     ActionHookActionBodyHTTPMethodEnum = "PUT"
	ActionHookActionBodyHTTPMethodEnumTrace   ActionHookActionBodyHTTPMethodEnum = "TRACE"
)

func (e ActionHookActionBodyHTTPMethodEnum) ToPointer() *ActionHookActionBodyHTTPMethodEnum {
	return &e
}

func (e *ActionHookActionBodyHTTPMethodEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CONNECT":
		fallthrough
	case "DELETE":
		fallthrough
	case "GET":
		fallthrough
	case "HEAD":
		fallthrough
	case "OPTIONS":
		fallthrough
	case "PATCH":
		fallthrough
	case "POST":
		fallthrough
	case "PUT":
		fallthrough
	case "TRACE":
		*e = ActionHookActionBodyHTTPMethodEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ActionHookActionBodyHTTPMethodEnum: %v", v)
	}
}

type ActionHookActionBodyTypeEnum string

const (
	ActionHookActionBodyTypeEnumActionHook ActionHookActionBodyTypeEnum = "ACTION_HOOK"
)

func (e ActionHookActionBodyTypeEnum) ToPointer() *ActionHookActionBodyTypeEnum {
	return &e
}

func (e *ActionHookActionBodyTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ACTION_HOOK":
		*e = ActionHookActionBodyTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ActionHookActionBodyTypeEnum: %v", v)
	}
}

type ActionHookActionBody struct {
	Confirmation          *ActionConfirmationBody            `json:"confirmation,omitempty"`
	HTTPMethod            ActionHookActionBodyHTTPMethodEnum `json:"httpMethod"`
	Label                 *string                            `json:"label,omitempty"`
	PropertyNamesIncluded []string                           `json:"propertyNamesIncluded"`
	Type                  ActionHookActionBodyTypeEnum       `json:"type"`
	URL                   string                             `json:"url"`
}
