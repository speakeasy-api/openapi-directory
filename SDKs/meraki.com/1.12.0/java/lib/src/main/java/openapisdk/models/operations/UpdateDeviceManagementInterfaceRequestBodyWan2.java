package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceManagementInterfaceRequestBodyWan2
 * WAN 2 settings (only for MX devices)
**/
public class UpdateDeviceManagementInterfaceRequestBodyWan2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticDns")
    public String[] staticDns;
    public UpdateDeviceManagementInterfaceRequestBodyWan2 withStaticDns(String[] staticDns) {
        this.staticDns = staticDns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticGatewayIp")
    public String staticGatewayIp;
    public UpdateDeviceManagementInterfaceRequestBodyWan2 withStaticGatewayIp(String staticGatewayIp) {
        this.staticGatewayIp = staticGatewayIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticIp")
    public String staticIp;
    public UpdateDeviceManagementInterfaceRequestBodyWan2 withStaticIp(String staticIp) {
        this.staticIp = staticIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticSubnetMask")
    public String staticSubnetMask;
    public UpdateDeviceManagementInterfaceRequestBodyWan2 withStaticSubnetMask(String staticSubnetMask) {
        this.staticSubnetMask = staticSubnetMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usingStaticIp")
    public Boolean usingStaticIp;
    public UpdateDeviceManagementInterfaceRequestBodyWan2 withUsingStaticIp(Boolean usingStaticIp) {
        this.usingStaticIp = usingStaticIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public UpdateDeviceManagementInterfaceRequestBodyWan2 withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wanEnabled")
    public UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum wanEnabled;
    public UpdateDeviceManagementInterfaceRequestBodyWan2 withWanEnabled(UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum wanEnabled) {
        this.wanEnabled = wanEnabled;
        return this;
    }
}