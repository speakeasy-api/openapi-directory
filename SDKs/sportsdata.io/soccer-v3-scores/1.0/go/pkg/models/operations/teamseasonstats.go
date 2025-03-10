// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// TeamSeasonStatsFormatEnum - Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
type TeamSeasonStatsFormatEnum string

const (
	TeamSeasonStatsFormatEnumXML  TeamSeasonStatsFormatEnum = "xml"
	TeamSeasonStatsFormatEnumJSON TeamSeasonStatsFormatEnum = "json"
)

func (e TeamSeasonStatsFormatEnum) ToPointer() *TeamSeasonStatsFormatEnum {
	return &e
}

func (e *TeamSeasonStatsFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "xml":
		fallthrough
	case "json":
		*e = TeamSeasonStatsFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TeamSeasonStatsFormatEnum: %v", v)
	}
}

type TeamSeasonStatsRequest struct {
	// Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
	Format TeamSeasonStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	// Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy).
	// Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
	Roundid string `pathParam:"style=simple,explode=false,name=roundid"`
}

type TeamSeasonStatsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	TeamSeasons []shared.TeamSeason
}
