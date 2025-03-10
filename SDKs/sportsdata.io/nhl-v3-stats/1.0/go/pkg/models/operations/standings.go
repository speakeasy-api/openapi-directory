// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// StandingsFormatEnum - Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
type StandingsFormatEnum string

const (
	StandingsFormatEnumXML  StandingsFormatEnum = "XML"
	StandingsFormatEnumJSON StandingsFormatEnum = "JSON"
)

func (e StandingsFormatEnum) ToPointer() *StandingsFormatEnum {
	return &e
}

func (e *StandingsFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "XML":
		fallthrough
	case "JSON":
		*e = StandingsFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for StandingsFormatEnum: %v", v)
	}
}

type StandingsRequest struct {
	// Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
	Format StandingsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	// Year of the season.
	//  <br>Examples: <code>2016</code>, <code>2017</code>.
	//
	Season string `pathParam:"style=simple,explode=false,name=season"`
}

type StandingsResponse struct {
	ContentType string
	Standings   []shared.Standing
	StatusCode  int
	RawResponse *http.Response
}
