package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("ruleId")
    public String ruleId;
    public UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}