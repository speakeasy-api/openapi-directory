package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationBrandingPolicyRequestBody {
    @JsonProperty("adminSettings")
    public CreateOrganizationBrandingPolicyRequestBodyAdminSettings adminSettings;
    public CreateOrganizationBrandingPolicyRequestBody withAdminSettings(CreateOrganizationBrandingPolicyRequestBodyAdminSettings adminSettings) {
        this.adminSettings = adminSettings;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public CreateOrganizationBrandingPolicyRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpSettings")
    public CreateOrganizationBrandingPolicyRequestBodyHelpSettings helpSettings;
    public CreateOrganizationBrandingPolicyRequestBody withHelpSettings(CreateOrganizationBrandingPolicyRequestBodyHelpSettings helpSettings) {
        this.helpSettings = helpSettings;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateOrganizationBrandingPolicyRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}