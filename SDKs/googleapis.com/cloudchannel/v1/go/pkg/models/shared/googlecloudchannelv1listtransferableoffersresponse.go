// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudChannelV1ListTransferableOffersResponse - Response message for CloudChannelService.ListTransferableOffers.
type GoogleCloudChannelV1ListTransferableOffersResponse struct {
	// A token to retrieve the next page of results. Pass to ListTransferableOffersRequest.page_token to obtain that page.
	NextPageToken *string `json:"nextPageToken,omitempty"`
	// Information about Offers for a customer that can be used for transfer.
	TransferableOffers []GoogleCloudChannelV1TransferableOffer `json:"transferableOffers,omitempty"`
}
