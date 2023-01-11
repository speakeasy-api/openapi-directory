package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Permission
 * The permission setting of an object.
**/
public class Permission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowDiscovery")
    public Boolean allowDiscovery;
    public Permission withAllowDiscovery(Boolean allowDiscovery) {
        this.allowDiscovery = allowDiscovery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anyone")
    public java.util.Map<String, Object> anyone;
    public Permission withAnyone(java.util.Map<String, Object> anyone) {
        this.anyone = anyone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public Domain domain;
    public Permission withDomain(Domain domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Group group;
    public Permission withGroup(Group group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public PermissionRoleEnum role;
    public Permission withRole(PermissionRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public Permission withUser(User user) {
        this.user = user;
        return this;
    }
}