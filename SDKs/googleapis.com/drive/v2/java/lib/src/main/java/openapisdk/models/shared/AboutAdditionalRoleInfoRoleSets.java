package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AboutAdditionalRoleInfoRoleSets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRoles")
    public String[] additionalRoles;
    public AboutAdditionalRoleInfoRoleSets withAdditionalRoles(String[] additionalRoles) {
        this.additionalRoles = additionalRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryRole")
    public String primaryRole;
    public AboutAdditionalRoleInfoRoleSets withPrimaryRole(String primaryRole) {
        this.primaryRole = primaryRole;
        return this;
    }
}