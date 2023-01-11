package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions {
    @JsonProperty("type")
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum type;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions withType(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions withValue(String value) {
        this.value = value;
        return this;
    }
}