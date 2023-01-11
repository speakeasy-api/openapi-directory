package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateDealsResponse
 * Response message for batch updating deals.
**/
public class BatchUpdateDealsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deals")
    public Deal[] deals;
    public BatchUpdateDealsResponse withDeals(Deal[] deals) {
        this.deals = deals;
        return this;
    }
}