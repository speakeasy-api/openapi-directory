package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnclaimDevicesRequest
 * Request to unclaim devices asynchronously in batch.
**/
public class UnclaimDevicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unclaims")
    public PartnerUnclaim[] unclaims;
    public UnclaimDevicesRequest withUnclaims(PartnerUnclaim[] unclaims) {
        this.unclaims = unclaims;
        return this;
    }
}