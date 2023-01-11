package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
 * The OSPF routing settings of the interface.
**/
public class UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("area")
    public String area;
    public UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings withArea(String area) {
        this.area = area;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public Long cost;
    public UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings withCost(Long cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPassiveEnabled")
    public Boolean isPassiveEnabled;
    public UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings withIsPassiveEnabled(Boolean isPassiveEnabled) {
        this.isPassiveEnabled = isPassiveEnabled;
        return this;
    }
}