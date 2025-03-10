/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevices - The devices and Switch Stacks assigned to the Group
 */
public class GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevices {
    /**
     * Data Array of Devices containing the name and serial
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevicesDevices[] devices;

    public GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevices withDevices(GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevicesDevices[] devices) {
        this.devices = devices;
        return this;
    }
    
    /**
     * Data Array of Switch Stacks containing the name and id
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchStacks")
    public GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevicesSwitchStacks[] switchStacks;

    public GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevices withSwitchStacks(GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevicesSwitchStacks[] switchStacks) {
        this.switchStacks = switchStacks;
        return this;
    }
    
    public GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONAssignedDevices(){}
}
