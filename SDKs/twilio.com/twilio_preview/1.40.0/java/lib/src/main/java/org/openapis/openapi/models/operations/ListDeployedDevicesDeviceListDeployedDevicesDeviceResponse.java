/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse - OK
 */
public class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public org.openapis.openapi.models.shared.PreviewDeployedDevicesFleetDevice[] devices;
    public ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse withDevices(org.openapis.openapi.models.shared.PreviewDeployedDevicesFleetDevice[] devices) {
        this.devices = devices;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta meta;
    public ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse withMeta(ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    
}
