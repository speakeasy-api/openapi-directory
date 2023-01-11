package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultRulesEnabled")
    public Boolean defaultRulesEnabled;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody withDefaultRulesEnabled(Boolean defaultRulesEnabled) {
        this.defaultRulesEnabled = defaultRulesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[] rules;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody withRules(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficShapingEnabled")
    public Boolean trafficShapingEnabled;
    public UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody withTrafficShapingEnabled(Boolean trafficShapingEnabled) {
        this.trafficShapingEnabled = trafficShapingEnabled;
        return this;
    }
}