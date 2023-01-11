package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMembershipRolesParams
 * The details of an update to a `MembershipRole`.
**/
public class UpdateMembershipRolesParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldMask")
    public String fieldMask;
    public UpdateMembershipRolesParams withFieldMask(String fieldMask) {
        this.fieldMask = fieldMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipRole")
    public MembershipRole1 membershipRole;
    public UpdateMembershipRolesParams withMembershipRole(MembershipRole1 membershipRole) {
        this.membershipRole = membershipRole;
        return this;
    }
}