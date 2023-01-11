package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions {
    @JsonProperty("type")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum type;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions withType(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions withValue(String value) {
        this.value = value;
        return this;
    }
}