package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchRoutingMulticastRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultSettings")
    public UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings defaultSettings;
    public UpdateNetworkSwitchRoutingMulticastRequestBody withDefaultSettings(UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings defaultSettings) {
        this.defaultSettings = defaultSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrides")
    public UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[] overrides;
    public UpdateNetworkSwitchRoutingMulticastRequestBody withOverrides(UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[] overrides) {
        this.overrides = overrides;
        return this;
    }
}