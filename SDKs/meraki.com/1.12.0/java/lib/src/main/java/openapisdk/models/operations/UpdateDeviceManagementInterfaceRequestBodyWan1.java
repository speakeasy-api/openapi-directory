package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceManagementInterfaceRequestBodyWan1
 * WAN 1 settings
**/
public class UpdateDeviceManagementInterfaceRequestBodyWan1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticDns")
    public String[] staticDns;
    public UpdateDeviceManagementInterfaceRequestBodyWan1 withStaticDns(String[] staticDns) {
        this.staticDns = staticDns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticGatewayIp")
    public String staticGatewayIp;
    public UpdateDeviceManagementInterfaceRequestBodyWan1 withStaticGatewayIp(String staticGatewayIp) {
        this.staticGatewayIp = staticGatewayIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticIp")
    public String staticIp;
    public UpdateDeviceManagementInterfaceRequestBodyWan1 withStaticIp(String staticIp) {
        this.staticIp = staticIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticSubnetMask")
    public String staticSubnetMask;
    public UpdateDeviceManagementInterfaceRequestBodyWan1 withStaticSubnetMask(String staticSubnetMask) {
        this.staticSubnetMask = staticSubnetMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usingStaticIp")
    public Boolean usingStaticIp;
    public UpdateDeviceManagementInterfaceRequestBodyWan1 withUsingStaticIp(Boolean usingStaticIp) {
        this.usingStaticIp = usingStaticIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public UpdateDeviceManagementInterfaceRequestBodyWan1 withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wanEnabled")
    public UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum wanEnabled;
    public UpdateDeviceManagementInterfaceRequestBodyWan1 withWanEnabled(UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum wanEnabled) {
        this.wanEnabled = wanEnabled;
        return this;
    }
}