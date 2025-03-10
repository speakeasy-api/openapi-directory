// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ContributorActivityWeeks struct {
	A *int64 `json:"a,omitempty"`
	C *int64 `json:"c,omitempty"`
	D *int64 `json:"d,omitempty"`
	W *int64 `json:"w,omitempty"`
}

// ContributorActivity - Contributor Activity
type ContributorActivity struct {
	// A GitHub user.
	Author NullableSimpleUser         `json:"author"`
	Total  int64                      `json:"total"`
	Weeks  []ContributorActivityWeeks `json:"weeks"`
}
