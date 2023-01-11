package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceSecurityIntrusionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idsRulesets")
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum idsRulesets;
    public UpdateNetworkApplianceSecurityIntrusionRequestBody withIdsRulesets(UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum idsRulesets) {
        this.idsRulesets = idsRulesets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum mode;
    public UpdateNetworkApplianceSecurityIntrusionRequestBody withMode(UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedNetworks")
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks protectedNetworks;
    public UpdateNetworkApplianceSecurityIntrusionRequestBody withProtectedNetworks(UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks protectedNetworks) {
        this.protectedNetworks = protectedNetworks;
        return this;
    }
}