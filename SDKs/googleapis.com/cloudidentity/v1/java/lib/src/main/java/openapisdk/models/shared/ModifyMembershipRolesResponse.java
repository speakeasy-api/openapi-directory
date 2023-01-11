package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyMembershipRolesResponse
 * The response message for MembershipsService.ModifyMembershipRoles.
**/
public class ModifyMembershipRolesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membership")
    public Membership membership;
    public ModifyMembershipRolesResponse withMembership(Membership membership) {
        this.membership = membership;
        return this;
    }
}