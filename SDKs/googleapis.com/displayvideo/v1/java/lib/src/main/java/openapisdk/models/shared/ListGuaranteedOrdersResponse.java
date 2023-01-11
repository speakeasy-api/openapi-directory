package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGuaranteedOrdersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedOrders")
    public GuaranteedOrder[] guaranteedOrders;
    public ListGuaranteedOrdersResponse withGuaranteedOrders(GuaranteedOrder[] guaranteedOrders) {
        this.guaranteedOrders = guaranteedOrders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGuaranteedOrdersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}