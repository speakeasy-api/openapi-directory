package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListOffersResponse
 * Response message for ListOffers.
**/
public class GoogleCloudChannelV1ListOffersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListOffersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offers")
    public GoogleCloudChannelV1Offer[] offers;
    public GoogleCloudChannelV1ListOffersResponse withOffers(GoogleCloudChannelV1Offer[] offers) {
        this.offers = offers;
        return this;
    }
}