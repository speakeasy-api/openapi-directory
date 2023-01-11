package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidateCreateMembershipRequestInput
 * Request message for the `GkeHub.ValidateCreateMembership` method.
**/
public class ValidateCreateMembershipRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membership")
    public MembershipInput membership;
    public ValidateCreateMembershipRequestInput withMembership(MembershipInput membership) {
        this.membership = membership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipId")
    public String membershipId;
    public ValidateCreateMembershipRequestInput withMembershipId(String membershipId) {
        this.membershipId = membershipId;
        return this;
    }
}