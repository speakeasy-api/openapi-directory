package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchStpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rstpEnabled")
    public Boolean rstpEnabled;
    public UpdateNetworkSwitchStpRequestBody withRstpEnabled(Boolean rstpEnabled) {
        this.rstpEnabled = rstpEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stpBridgePriority")
    public UpdateNetworkSwitchStpRequestBodyStpBridgePriority[] stpBridgePriority;
    public UpdateNetworkSwitchStpRequestBody withStpBridgePriority(UpdateNetworkSwitchStpRequestBodyStpBridgePriority[] stpBridgePriority) {
        this.stpBridgePriority = stpBridgePriority;
        return this;
    }
}