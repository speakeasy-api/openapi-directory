// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PlayerGameRedZoneStatsInsideFiveFormatEnum - Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
type PlayerGameRedZoneStatsInsideFiveFormatEnum string

const (
	PlayerGameRedZoneStatsInsideFiveFormatEnumXML  PlayerGameRedZoneStatsInsideFiveFormatEnum = "XML"
	PlayerGameRedZoneStatsInsideFiveFormatEnumJSON PlayerGameRedZoneStatsInsideFiveFormatEnum = "JSON"
)

func (e PlayerGameRedZoneStatsInsideFiveFormatEnum) ToPointer() *PlayerGameRedZoneStatsInsideFiveFormatEnum {
	return &e
}

func (e *PlayerGameRedZoneStatsInsideFiveFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "XML":
		fallthrough
	case "JSON":
		*e = PlayerGameRedZoneStatsInsideFiveFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PlayerGameRedZoneStatsInsideFiveFormatEnum: %v", v)
	}
}

type PlayerGameRedZoneStatsInsideFiveRequest struct {
	// Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
	Format PlayerGameRedZoneStatsInsideFiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	// Year of the season and the season type. If no season type is provided, then the default is regular season.
	//           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
	//
	Season string `pathParam:"style=simple,explode=false,name=season"`
	// Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
	//           Example: <code>1</code>
	//
	Week string `pathParam:"style=simple,explode=false,name=week"`
}

type PlayerGameRedZoneStatsInsideFiveResponse struct {
	ContentType        string
	PlayerGameRedZones []shared.PlayerGameRedZone
	StatusCode         int
	RawResponse        *http.Response
}
