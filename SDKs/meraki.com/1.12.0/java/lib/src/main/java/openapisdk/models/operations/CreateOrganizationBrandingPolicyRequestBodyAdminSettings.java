package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrganizationBrandingPolicyRequestBodyAdminSettings
 * Settings for describing which kinds of admins this policy applies to.
**/
public class CreateOrganizationBrandingPolicyRequestBodyAdminSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliesTo")
    public CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum appliesTo;
    public CreateOrganizationBrandingPolicyRequestBodyAdminSettings withAppliesTo(CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum appliesTo) {
        this.appliesTo = appliesTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public CreateOrganizationBrandingPolicyRequestBodyAdminSettings withValues(String[] values) {
        this.values = values;
        return this;
    }
}