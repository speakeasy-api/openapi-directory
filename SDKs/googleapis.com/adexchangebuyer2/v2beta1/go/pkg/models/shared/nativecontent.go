// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// NativeContent - Native content for a creative.
type NativeContent struct {
	// The name of the advertiser or sponsor, to be displayed in the ad creative.
	AdvertiserName *string `json:"advertiserName,omitempty"`
	// An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
	AppIcon *Image `json:"appIcon,omitempty"`
	// A long description of the ad.
	Body *string `json:"body,omitempty"`
	// A label for the button that the user is supposed to click.
	CallToAction *string `json:"callToAction,omitempty"`
	// The URL that the browser/SDK will load when the user clicks the ad.
	ClickLinkURL *string `json:"clickLinkUrl,omitempty"`
	// The URL to use for click tracking.
	ClickTrackingURL *string `json:"clickTrackingUrl,omitempty"`
	// A short title for the ad.
	Headline *string `json:"headline,omitempty"`
	// An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
	Image *Image `json:"image,omitempty"`
	// An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
	Logo *Image `json:"logo,omitempty"`
	// The price of the promoted app including currency info.
	PriceDisplayText *string `json:"priceDisplayText,omitempty"`
	// The app rating in the app store. Must be in the range [0-5].
	StarRating *float64 `json:"starRating,omitempty"`
	// The URL to the app store to purchase/download the promoted app.
	StoreURL *string `json:"storeUrl,omitempty"`
	// The URL to fetch a native video ad.
	VideoURL *string `json:"videoUrl,omitempty"`
}
