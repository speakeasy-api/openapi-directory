// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListCategoriesResponse - Successful response to get all categories and their ancestry. The
// returned list is not paginated.
type ListCategoriesResponse struct {
	// The list of categories returned in this response.
	//
	Data []CategoryResource `json:"data"`
}
