package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateDealsRequestInput
 * Request message for batch updating deals.
**/
public class BatchUpdateDealsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public UpdateDealRequestInput[] requests;
    public BatchUpdateDealsRequestInput withRequests(UpdateDealRequestInput[] requests) {
        this.requests = requests;
        return this;
    }
}