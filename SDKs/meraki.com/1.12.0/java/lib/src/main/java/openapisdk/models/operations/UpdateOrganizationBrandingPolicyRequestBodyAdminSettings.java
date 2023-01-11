package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateOrganizationBrandingPolicyRequestBodyAdminSettings
 * Settings for describing which kinds of admins this policy applies to.
**/
public class UpdateOrganizationBrandingPolicyRequestBodyAdminSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliesTo")
    public UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum appliesTo;
    public UpdateOrganizationBrandingPolicyRequestBodyAdminSettings withAppliesTo(UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum appliesTo) {
        this.appliesTo = appliesTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public UpdateOrganizationBrandingPolicyRequestBodyAdminSettings withValues(String[] values) {
        this.values = values;
        return this;
    }
}