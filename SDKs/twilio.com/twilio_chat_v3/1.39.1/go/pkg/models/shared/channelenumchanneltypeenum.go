// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ChannelEnumChannelTypeEnum string

const (
	ChannelEnumChannelTypeEnumPublic  ChannelEnumChannelTypeEnum = "public"
	ChannelEnumChannelTypeEnumPrivate ChannelEnumChannelTypeEnum = "private"
)

func (e *ChannelEnumChannelTypeEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "public":
		fallthrough
	case "private":
		*e = ChannelEnumChannelTypeEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for ChannelEnumChannelTypeEnum: %s", s)
	}
}
