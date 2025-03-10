// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudRetailV2betaPriceInfoPriceRange - The price range of all variant Product having the same Product.primary_product_id.
type GoogleCloudRetailV2betaPriceInfoPriceRange struct {
	// A floating point interval.
	OriginalPrice *GoogleCloudRetailV2betaInterval `json:"originalPrice,omitempty"`
	// A floating point interval.
	Price *GoogleCloudRetailV2betaInterval `json:"price,omitempty"`
}
