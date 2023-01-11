package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListTransferableOffersResponse
 * Response message for CloudChannelService.ListTransferableOffers.
**/
public class GoogleCloudChannelV1ListTransferableOffersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListTransferableOffersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferableOffers")
    public GoogleCloudChannelV1TransferableOffer[] transferableOffers;
    public GoogleCloudChannelV1ListTransferableOffersResponse withTransferableOffers(GoogleCloudChannelV1TransferableOffer[] transferableOffers) {
        this.transferableOffers = transferableOffers;
        return this;
    }
}