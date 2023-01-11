package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Membership
 * A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
**/
public class Membership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Membership withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberKey")
    public EntityKey memberKey;
    public Membership withMemberKey(EntityKey memberKey) {
        this.memberKey = memberKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Membership withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredMemberKey")
    public EntityKey preferredMemberKey;
    public Membership withPreferredMemberKey(EntityKey preferredMemberKey) {
        this.preferredMemberKey = preferredMemberKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public MembershipRole1[] roles;
    public Membership withRoles(MembershipRole1[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MembershipTypeEnum type;
    public Membership withType(MembershipTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Membership withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}