package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoveOrgMembershipRequest
 * The request message for OrgMembershipsService.MoveOrgMembership.
**/
public class MoveOrgMembershipRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public MoveOrgMembershipRequest withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationOrgUnit")
    public String destinationOrgUnit;
    public MoveOrgMembershipRequest withDestinationOrgUnit(String destinationOrgUnit) {
        this.destinationOrgUnit = destinationOrgUnit;
        return this;
    }
}