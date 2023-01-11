package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrgMembership
 * A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member".
**/
public class OrgMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member")
    public String member;
    public OrgMembership withMember(String member) {
        this.member = member;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberUri")
    public String memberUri;
    public OrgMembership withMemberUri(String memberUri) {
        this.memberUri = memberUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrgMembership withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OrgMembershipTypeEnum type;
    public OrgMembership withType(OrgMembershipTypeEnum type) {
        this.type = type;
        return this;
    }
}