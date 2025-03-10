// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// XPingFormatEnum - Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
type XPingFormatEnum string

const (
	XPingFormatEnumXML  XPingFormatEnum = "XML"
	XPingFormatEnumJSON XPingFormatEnum = "JSON"
)

func (e XPingFormatEnum) ToPointer() *XPingFormatEnum {
	return &e
}

func (e *XPingFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "XML":
		fallthrough
	case "JSON":
		*e = XPingFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for XPingFormatEnum: %v", v)
	}
}

type XPingRequest struct {
	// Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
	Format XPingFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	// Number of seconds to sleep before responding
	Seconds string `pathParam:"style=simple,explode=false,name=seconds"`
}

type XPingResponse struct {
	ContentType                string
	StatusCode                 int
	RawResponse                *http.Response
	XPing200ApplicationJSONAny interface{}
}
