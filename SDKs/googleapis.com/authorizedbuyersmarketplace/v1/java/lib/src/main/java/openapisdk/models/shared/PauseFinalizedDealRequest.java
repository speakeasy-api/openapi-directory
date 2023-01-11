package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PauseFinalizedDealRequest
 * Request message for pausing a finalized deal.
**/
public class PauseFinalizedDealRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public PauseFinalizedDealRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
}