// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudRetailV2betaListCatalogsResponse - Response for CatalogService.ListCatalogs method.
type GoogleCloudRetailV2betaListCatalogsResponse struct {
	// All the customer's Catalogs.
	Catalogs []GoogleCloudRetailV2betaCatalog `json:"catalogs,omitempty"`
	// A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
