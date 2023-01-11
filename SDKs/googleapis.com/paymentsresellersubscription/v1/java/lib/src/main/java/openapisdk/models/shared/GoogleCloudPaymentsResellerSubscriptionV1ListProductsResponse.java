package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public GoogleCloudPaymentsResellerSubscriptionV1Product[] products;
    public GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse withProducts(GoogleCloudPaymentsResellerSubscriptionV1Product[] products) {
        this.products = products;
        return this;
    }
}