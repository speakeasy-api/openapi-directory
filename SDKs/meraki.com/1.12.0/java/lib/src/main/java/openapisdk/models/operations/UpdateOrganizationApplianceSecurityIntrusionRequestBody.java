package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrganizationApplianceSecurityIntrusionRequestBody {
    @JsonProperty("allowedRules")
    public UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[] allowedRules;
    public UpdateOrganizationApplianceSecurityIntrusionRequestBody withAllowedRules(UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[] allowedRules) {
        this.allowedRules = allowedRules;
        return this;
    }
}