// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ConfigurationEnumStatusEnum string

const (
	ConfigurationEnumStatusEnumOk         ConfigurationEnumStatusEnum = "ok"
	ConfigurationEnumStatusEnumInprogress ConfigurationEnumStatusEnum = "inprogress"
	ConfigurationEnumStatusEnumNotstarted ConfigurationEnumStatusEnum = "notstarted"
)

func (e *ConfigurationEnumStatusEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "ok":
		fallthrough
	case "inprogress":
		fallthrough
	case "notstarted":
		*e = ConfigurationEnumStatusEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for ConfigurationEnumStatusEnum: %s", s)
	}
}
