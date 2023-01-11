package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListSkusResponse
 * Response message for ListSkus.
**/
public class GoogleCloudChannelV1ListSkusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListSkusResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skus")
    public GoogleCloudChannelV1Sku[] skus;
    public GoogleCloudChannelV1ListSkusResponse withSkus(GoogleCloudChannelV1Sku[] skus) {
        this.skus = skus;
        return this;
    }
}