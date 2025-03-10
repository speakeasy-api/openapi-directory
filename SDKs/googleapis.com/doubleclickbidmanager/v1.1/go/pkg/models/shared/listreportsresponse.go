// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListReportsResponse - List reports response.
type ListReportsResponse struct {
	// Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".
	Kind *string `json:"kind,omitempty"`
	// Next page's pagination token if one exists.
	NextPageToken *string `json:"nextPageToken,omitempty"`
	// Retrieved reports.
	Reports []Report `json:"reports,omitempty"`
}
