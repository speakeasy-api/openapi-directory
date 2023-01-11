package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrderDealsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deals")
    public MarketplaceDeal[] deals;
    public GetOrderDealsResponse withDeals(MarketplaceDeal[] deals) {
        this.deals = deals;
        return this;
    }
}