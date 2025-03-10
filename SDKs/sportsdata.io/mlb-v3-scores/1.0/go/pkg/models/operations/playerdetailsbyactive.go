// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PlayerDetailsByActiveFormatEnum - Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
type PlayerDetailsByActiveFormatEnum string

const (
	PlayerDetailsByActiveFormatEnumXML  PlayerDetailsByActiveFormatEnum = "XML"
	PlayerDetailsByActiveFormatEnumJSON PlayerDetailsByActiveFormatEnum = "JSON"
)

func (e PlayerDetailsByActiveFormatEnum) ToPointer() *PlayerDetailsByActiveFormatEnum {
	return &e
}

func (e *PlayerDetailsByActiveFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "XML":
		fallthrough
	case "JSON":
		*e = PlayerDetailsByActiveFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PlayerDetailsByActiveFormatEnum: %v", v)
	}
}

type PlayerDetailsByActiveRequest struct {
	// Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
	Format PlayerDetailsByActiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type PlayerDetailsByActiveResponse struct {
	ContentType string
	Players     []shared.Player
	StatusCode  int
	RawResponse *http.Response
}
