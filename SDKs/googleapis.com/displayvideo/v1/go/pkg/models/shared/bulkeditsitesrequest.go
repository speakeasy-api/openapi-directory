// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// BulkEditSitesRequestInput - Request message for SiteService.BulkEditSites.
type BulkEditSitesRequestInput struct {
	// The ID of the advertiser that owns the parent channel.
	AdvertiserID *string `json:"advertiserId,omitempty"`
	// The sites to create in batch, specified as a list of Sites.
	CreatedSites []SiteInput `json:"createdSites,omitempty"`
	// The sites to delete in batch, specified as a list of site url_or_app_ids.
	DeletedSites []string `json:"deletedSites,omitempty"`
	// The ID of the partner that owns the parent channel.
	PartnerID *string `json:"partnerId,omitempty"`
}
