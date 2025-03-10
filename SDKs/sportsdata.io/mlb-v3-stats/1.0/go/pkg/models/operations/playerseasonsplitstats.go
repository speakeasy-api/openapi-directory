// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PlayerSeasonSplitStatsFormatEnum - Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
type PlayerSeasonSplitStatsFormatEnum string

const (
	PlayerSeasonSplitStatsFormatEnumXML  PlayerSeasonSplitStatsFormatEnum = "XML"
	PlayerSeasonSplitStatsFormatEnumJSON PlayerSeasonSplitStatsFormatEnum = "JSON"
)

func (e PlayerSeasonSplitStatsFormatEnum) ToPointer() *PlayerSeasonSplitStatsFormatEnum {
	return &e
}

func (e *PlayerSeasonSplitStatsFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "XML":
		fallthrough
	case "JSON":
		*e = PlayerSeasonSplitStatsFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PlayerSeasonSplitStatsFormatEnum: %v", v)
	}
}

// PlayerSeasonSplitStatsSplitEnum - The desired split of stats. Currently, we support vs. Left/Right/Switch handed pitchers/hitters. Possible values are: <code>L</code>, <code>R</code> and <code>S</code>
type PlayerSeasonSplitStatsSplitEnum string

const (
	PlayerSeasonSplitStatsSplitEnumL PlayerSeasonSplitStatsSplitEnum = "L"
	PlayerSeasonSplitStatsSplitEnumR PlayerSeasonSplitStatsSplitEnum = "R"
	PlayerSeasonSplitStatsSplitEnumS PlayerSeasonSplitStatsSplitEnum = "S"
)

func (e PlayerSeasonSplitStatsSplitEnum) ToPointer() *PlayerSeasonSplitStatsSplitEnum {
	return &e
}

func (e *PlayerSeasonSplitStatsSplitEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "L":
		fallthrough
	case "R":
		fallthrough
	case "S":
		*e = PlayerSeasonSplitStatsSplitEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PlayerSeasonSplitStatsSplitEnum: %v", v)
	}
}

type PlayerSeasonSplitStatsRequest struct {
	// Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
	Format PlayerSeasonSplitStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	// Year of the season.
	// <br>Examples: <code>2017</code>, <code>2018</code>.
	Season string `pathParam:"style=simple,explode=false,name=season"`
	// The desired split of stats. Currently, we support vs. Left/Right/Switch handed pitchers/hitters. Possible values are: <code>L</code>, <code>R</code> and <code>S</code>
	Split PlayerSeasonSplitStatsSplitEnum `pathParam:"style=simple,explode=false,name=split"`
}

type PlayerSeasonSplitStatsResponse struct {
	ContentType   string
	PlayerSeasons []shared.PlayerSeason
	StatusCode    int
	RawResponse   *http.Response
}
