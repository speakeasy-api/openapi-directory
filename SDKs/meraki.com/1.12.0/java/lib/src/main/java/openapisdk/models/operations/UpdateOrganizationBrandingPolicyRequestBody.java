package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationBrandingPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminSettings")
    public UpdateOrganizationBrandingPolicyRequestBodyAdminSettings adminSettings;
    public UpdateOrganizationBrandingPolicyRequestBody withAdminSettings(UpdateOrganizationBrandingPolicyRequestBodyAdminSettings adminSettings) {
        this.adminSettings = adminSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateOrganizationBrandingPolicyRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpSettings")
    public UpdateOrganizationBrandingPolicyRequestBodyHelpSettings helpSettings;
    public UpdateOrganizationBrandingPolicyRequestBody withHelpSettings(UpdateOrganizationBrandingPolicyRequestBodyHelpSettings helpSettings) {
        this.helpSettings = helpSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateOrganizationBrandingPolicyRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}