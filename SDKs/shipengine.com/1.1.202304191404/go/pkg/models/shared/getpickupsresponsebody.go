// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GetPickupsResponseBodyPaginationLink - Helpful links to other pages of results
type GetPickupsResponseBodyPaginationLink struct {
	// The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
	//
	First Link `json:"first"`
	// The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
	//
	Last Link `json:"last"`
	// The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
	//
	Next OptionalLink `json:"next"`
	// The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
	//
	Prev OptionalLink `json:"prev"`
}

// GetPickupsResponseBody - An error response body
type GetPickupsResponseBody struct {
	// The errors associated with the failed API call
	Errors []Error `json:"errors"`
	// Helpful links to other pages of results
	Links GetPickupsResponseBodyPaginationLink `json:"links"`
	// Current page of the list pickups results
	Page int `json:"page"`
	// Total number of pages for list pickups results
	Pages int `json:"pages"`
	// An array of pickups associated with the user's account.
	Pickups []PickupOutput `json:"pickups"`
	// A UUID that uniquely identifies the request id.
	// This can be given to the support team to help debug non-trivial issues that may occur
	//
	RequestID string `json:"request_id"`
	// The total number of pickups returned
	Total int64 `json:"total"`
}
