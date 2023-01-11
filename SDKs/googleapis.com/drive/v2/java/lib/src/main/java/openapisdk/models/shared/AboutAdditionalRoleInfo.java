package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AboutAdditionalRoleInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleSets")
    public AboutAdditionalRoleInfoRoleSets[] roleSets;
    public AboutAdditionalRoleInfo withRoleSets(AboutAdditionalRoleInfoRoleSets[] roleSets) {
        this.roleSets = roleSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AboutAdditionalRoleInfo withType(String type) {
        this.type = type;
        return this;
    }
}