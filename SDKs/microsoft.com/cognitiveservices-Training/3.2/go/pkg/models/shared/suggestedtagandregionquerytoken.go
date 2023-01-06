package shared

type SuggestedTagAndRegionQueryTokenSortByEnum string

const (
	SuggestedTagAndRegionQueryTokenSortByEnumUncertaintyAscending  SuggestedTagAndRegionQueryTokenSortByEnum = "UncertaintyAscending"
	SuggestedTagAndRegionQueryTokenSortByEnumUncertaintyDescending SuggestedTagAndRegionQueryTokenSortByEnum = "UncertaintyDescending"
)

// SuggestedTagAndRegionQueryToken
// Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
// Then on subsequent calls, uses the session/continuation from the previous SuggestedTagAndRegionQuery result to fetch additional results.
type SuggestedTagAndRegionQueryToken struct {
	Continuation *string                                    `json:"continuation,omitempty" form:"name=continuation"`
	MaxCount     *int32                                     `json:"maxCount,omitempty" form:"name=maxCount"`
	Session      *string                                    `json:"session,omitempty" form:"name=session"`
	SortBy       *SuggestedTagAndRegionQueryTokenSortByEnum `json:"sortBy,omitempty" form:"name=sortBy"`
	TagIds       []string                                   `json:"tagIds,omitempty" form:"name=tagIds"`
	Threshold    *float64                                   `json:"threshold,omitempty" form:"name=threshold"`
}
