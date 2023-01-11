package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditAllOrderDealsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deals")
    public MarketplaceDeal[] deals;
    public EditAllOrderDealsResponse withDeals(MarketplaceDeal[] deals) {
        this.deals = deals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderRevisionNumber")
    public String orderRevisionNumber;
    public EditAllOrderDealsResponse withOrderRevisionNumber(String orderRevisionNumber) {
        this.orderRevisionNumber = orderRevisionNumber;
        return this;
    }
}