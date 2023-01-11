package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchQosRulesOrderRequestBody {
    @JsonProperty("ruleIds")
    public String[] ruleIds;
    public UpdateNetworkSwitchQosRulesOrderRequestBody withRuleIds(String[] ruleIds) {
        this.ruleIds = ruleIds;
        return this;
    }
}