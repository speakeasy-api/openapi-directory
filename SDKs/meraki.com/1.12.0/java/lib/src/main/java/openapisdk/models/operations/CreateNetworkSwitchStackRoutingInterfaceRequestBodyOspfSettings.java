package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
 * The OSPF routing settings of the interface.
**/
public class CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area")
    public String area;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings withArea(String area) {
        this.area = area;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public Long cost;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings withCost(Long cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPassiveEnabled")
    public Boolean isPassiveEnabled;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings withIsPassiveEnabled(Boolean isPassiveEnabled) {
        this.isPassiveEnabled = isPassiveEnabled;
        return this;
    }
}