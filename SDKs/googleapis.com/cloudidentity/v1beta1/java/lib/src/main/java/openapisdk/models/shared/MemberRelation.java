package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MemberRelation
 * Message representing a transitive membership of a group.
**/
public class MemberRelation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public String member;
    public MemberRelation withMember(String member) {
        this.member = member;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredMemberKey")
    public EntityKey[] preferredMemberKey;
    public MemberRelation withPreferredMemberKey(EntityKey[] preferredMemberKey) {
        this.preferredMemberKey = preferredMemberKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationType")
    public MemberRelationRelationTypeEnum relationType;
    public MemberRelation withRelationType(MemberRelationRelationTypeEnum relationType) {
        this.relationType = relationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public TransitiveMembershipRole[] roles;
    public MemberRelation withRoles(TransitiveMembershipRole[] roles) {
        this.roles = roles;
        return this;
    }
}