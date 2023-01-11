package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerListDpcsResponse
 * Response message of customer's listing DPCs.
**/
public class CustomerListDpcsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dpcs")
    public Dpc[] dpcs;
    public CustomerListDpcsResponse withDpcs(Dpc[] dpcs) {
        this.dpcs = dpcs;
        return this;
    }
}