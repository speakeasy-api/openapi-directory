// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// SyncMapItemEnumQueryResultOrderEnum - How to order the Map Items returned by their `key` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
type SyncMapItemEnumQueryResultOrderEnum string

const (
	SyncMapItemEnumQueryResultOrderEnumAsc  SyncMapItemEnumQueryResultOrderEnum = "asc"
	SyncMapItemEnumQueryResultOrderEnumDesc SyncMapItemEnumQueryResultOrderEnum = "desc"
)

func (e SyncMapItemEnumQueryResultOrderEnum) ToPointer() *SyncMapItemEnumQueryResultOrderEnum {
	return &e
}

func (e *SyncMapItemEnumQueryResultOrderEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "asc":
		fallthrough
	case "desc":
		*e = SyncMapItemEnumQueryResultOrderEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SyncMapItemEnumQueryResultOrderEnum: %v", v)
	}
}
