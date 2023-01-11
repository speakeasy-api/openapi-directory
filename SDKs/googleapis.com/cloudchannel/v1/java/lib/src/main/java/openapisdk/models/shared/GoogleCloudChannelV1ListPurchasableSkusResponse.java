package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListPurchasableSkusResponse
 * Response message for ListPurchasableSkus.
**/
public class GoogleCloudChannelV1ListPurchasableSkusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListPurchasableSkusResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchasableSkus")
    public GoogleCloudChannelV1PurchasableSku[] purchasableSkus;
    public GoogleCloudChannelV1ListPurchasableSkusResponse withPurchasableSkus(GoogleCloudChannelV1PurchasableSku[] purchasableSkus) {
        this.purchasableSkus = purchasableSkus;
        return this;
    }
}