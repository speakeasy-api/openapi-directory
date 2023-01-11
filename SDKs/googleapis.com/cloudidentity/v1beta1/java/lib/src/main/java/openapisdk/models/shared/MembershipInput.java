package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipInput
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
**/
public class MembershipInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberKey")
    public EntityKey memberKey;
    public MembershipInput withMemberKey(EntityKey memberKey) {
        this.memberKey = memberKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredMemberKey")
    public EntityKey preferredMemberKey;
    public MembershipInput withPreferredMemberKey(EntityKey preferredMemberKey) {
        this.preferredMemberKey = preferredMemberKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public MembershipRole[] roles;
    public MembershipInput withRoles(MembershipRole[] roles) {
        this.roles = roles;
        return this;
    }
}