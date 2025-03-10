// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AdUnit - Describes an AdMob ad unit.
type AdUnit struct {
	// AdFormat of the ad unit. Possible values are as follows: "APP_OPEN" - App Open ad format. "BANNER" - Banner ad format. "BANNER_INTERSTITIAL" - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. "INTERSTITIAL" - A full screen ad. Supported ad types are "RICH_MEDIA" and "VIDEO". "NATIVE" - Native ad format. "REWARDED" - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are "RICH_MEDIA" (interactive) and video where video can not be excluded. "REWARDED_INTERSTITIAL" - Rewarded Interstitial ad format. Only supports video ad type. See https://support.google.com/admob/answer/9884467.
	AdFormat *string `json:"adFormat,omitempty"`
	// Ad media type supported by this ad unit. Possible values as follows: "RICH_MEDIA" - Text, image, and other non-video media. "VIDEO" - Video media.
	AdTypes []string `json:"adTypes,omitempty"`
	// The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789
	AdUnitID *string `json:"adUnitId,omitempty"`
	// The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789
	AppID *string `json:"appId,omitempty"`
	// The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.
	DisplayName *string `json:"displayName,omitempty"`
	// Resource name for this ad unit. Format is accounts/{publisher_id}/adUnits/{ad_unit_id_fragment} Example: accounts/pub-9876543210987654/adUnits/0123456789
	Name *string `json:"name,omitempty"`
}
