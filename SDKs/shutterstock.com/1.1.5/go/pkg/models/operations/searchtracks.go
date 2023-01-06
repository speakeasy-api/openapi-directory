package operations

import (
	"openapi/pkg/models/shared"
)

type SearchTracksLibraryEnum string

const (
	SearchTracksLibraryEnumShutterstock SearchTracksLibraryEnum = "shutterstock"
	SearchTracksLibraryEnumPremier      SearchTracksLibraryEnum = "premier"
)

type SearchTracksSortEnum string

const (
	SearchTracksSortEnumScore      SearchTracksSortEnum = "score"
	SearchTracksSortEnumRankingAll SearchTracksSortEnum = "ranking_all"
	SearchTracksSortEnumArtist     SearchTracksSortEnum = "artist"
	SearchTracksSortEnumTitle      SearchTracksSortEnum = "title"
	SearchTracksSortEnumBpm        SearchTracksSortEnum = "bpm"
	SearchTracksSortEnumFreshness  SearchTracksSortEnum = "freshness"
	SearchTracksSortEnumDuration   SearchTracksSortEnum = "duration"
)

type SearchTracksSortOrderEnum string

const (
	SearchTracksSortOrderEnumAsc  SearchTracksSortOrderEnum = "asc"
	SearchTracksSortOrderEnumDesc SearchTracksSortOrderEnum = "desc"
)

type SearchTracksViewEnum string

const (
	SearchTracksViewEnumMinimal SearchTracksViewEnum = "minimal"
	SearchTracksViewEnumFull    SearchTracksViewEnum = "full"
)

type SearchTracksQueryParams struct {
	Artists          []string                   `queryParam:"style=form,explode=true,name=artists"`
	Bpm              *int64                     `queryParam:"style=form,explode=true,name=bpm"`
	BpmFrom          *int64                     `queryParam:"style=form,explode=true,name=bpm_from"`
	BpmTo            *int64                     `queryParam:"style=form,explode=true,name=bpm_to"`
	Duration         *int64                     `queryParam:"style=form,explode=true,name=duration"`
	DurationFrom     *int64                     `queryParam:"style=form,explode=true,name=duration_from"`
	DurationTo       *int64                     `queryParam:"style=form,explode=true,name=duration_to"`
	Fields           *string                    `queryParam:"style=form,explode=true,name=fields"`
	Genre            []string                   `queryParam:"style=form,explode=true,name=genre"`
	Instruments      []string                   `queryParam:"style=form,explode=true,name=instruments"`
	IsInstrumental   *bool                      `queryParam:"style=form,explode=true,name=is_instrumental"`
	Language         *string                    `queryParam:"style=form,explode=true,name=language"`
	Library          *SearchTracksLibraryEnum   `queryParam:"style=form,explode=true,name=library"`
	Moods            []string                   `queryParam:"style=form,explode=true,name=moods"`
	Page             *int64                     `queryParam:"style=form,explode=true,name=page"`
	PerPage          *int64                     `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string                    `queryParam:"style=form,explode=true,name=query"`
	Sort             *SearchTracksSortEnum      `queryParam:"style=form,explode=true,name=sort"`
	SortOrder        *SearchTracksSortOrderEnum `queryParam:"style=form,explode=true,name=sort_order"`
	View             *SearchTracksViewEnum      `queryParam:"style=form,explode=true,name=view"`
	VocalDescription *string                    `queryParam:"style=form,explode=true,name=vocal_description"`
}

type SearchTracksSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type SearchTracksRequest struct {
	QueryParams SearchTracksQueryParams
	Security    SearchTracksSecurity
}

type SearchTracksResponse struct {
	AudioSearchResults *shared.AudioSearchResults
	ContentType        string
	StatusCode         int64
}
