package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceCellularGatewayPortForwardingRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules[] rules;
    public UpdateDeviceCellularGatewayPortForwardingRulesRequestBody withRules(UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}