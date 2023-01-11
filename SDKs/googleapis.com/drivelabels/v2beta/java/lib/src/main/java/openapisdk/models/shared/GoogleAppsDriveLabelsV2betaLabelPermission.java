package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabelPermission
 * The permission that applies to a principal (user, group, audience) on a label.
**/
public class GoogleAppsDriveLabelsV2betaLabelPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audience")
    public String audience;
    public GoogleAppsDriveLabelsV2betaLabelPermission withAudience(String audience) {
        this.audience = audience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GoogleAppsDriveLabelsV2betaLabelPermission withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public GoogleAppsDriveLabelsV2betaLabelPermission withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsDriveLabelsV2betaLabelPermission withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public String person;
    public GoogleAppsDriveLabelsV2betaLabelPermission withPerson(String person) {
        this.person = person;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum role;
    public GoogleAppsDriveLabelsV2betaLabelPermission withRole(GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum role) {
        this.role = role;
        return this;
    }
}