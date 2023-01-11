package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListProductsResponse
 * Response message for ListProducts.
**/
public class GoogleCloudChannelV1ListProductsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListProductsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public GoogleCloudChannelV1Product[] products;
    public GoogleCloudChannelV1ListProductsResponse withProducts(GoogleCloudChannelV1Product[] products) {
        this.products = products;
        return this;
    }
}