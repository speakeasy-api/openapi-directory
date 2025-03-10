// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DriverDetailsFormatEnum - Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
type DriverDetailsFormatEnum string

const (
	DriverDetailsFormatEnumXML  DriverDetailsFormatEnum = "xml"
	DriverDetailsFormatEnumJSON DriverDetailsFormatEnum = "json"
)

func (e DriverDetailsFormatEnum) ToPointer() *DriverDetailsFormatEnum {
	return &e
}

func (e *DriverDetailsFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "xml":
		fallthrough
	case "json":
		*e = DriverDetailsFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DriverDetailsFormatEnum: %v", v)
	}
}

type DriverDetailsRequest struct {
	// Unique FantasyData Driver ID.
	// Example:<code>80000268</code>.
	Driverid string `pathParam:"style=simple,explode=false,name=driverid"`
	// Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
	Format DriverDetailsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type DriverDetailsResponse struct {
	ContentType string
	Driver      *shared.Driver
	StatusCode  int
	RawResponse *http.Response
}
