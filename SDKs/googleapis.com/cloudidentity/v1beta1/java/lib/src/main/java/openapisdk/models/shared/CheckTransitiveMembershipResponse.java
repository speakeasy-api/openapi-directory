package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckTransitiveMembershipResponse
 * The response message for MembershipsService.CheckTransitiveMembership.
**/
public class CheckTransitiveMembershipResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasMembership")
    public Boolean hasMembership;
    public CheckTransitiveMembershipResponse withHasMembership(Boolean hasMembership) {
        this.hasMembership = hasMembership;
        return this;
    }
}