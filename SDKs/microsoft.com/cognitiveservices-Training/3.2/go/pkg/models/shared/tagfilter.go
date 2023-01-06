package shared

// TagFilter
// Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold.
type TagFilter struct {
	TagIds    []string `json:"tagIds,omitempty" form:"name=tagIds"`
	Threshold *float64 `json:"threshold,omitempty" form:"name=threshold"`
}
