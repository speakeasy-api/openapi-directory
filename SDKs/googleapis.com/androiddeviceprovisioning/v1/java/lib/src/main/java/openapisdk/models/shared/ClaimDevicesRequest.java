package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClaimDevicesRequest
 * Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
**/
public class ClaimDevicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claims")
    public PartnerClaim[] claims;
    public ClaimDevicesRequest withClaims(PartnerClaim[] claims) {
        this.claims = claims;
        return this;
    }
}