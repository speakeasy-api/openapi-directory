/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleChromeManagementV1GraphicsAdapterInfo - Information of a graphics adapter (GPU).
 */
public class GoogleChromeManagementV1GraphicsAdapterInfo {
    /**
     * Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adapter")
    public String adapter;

    public GoogleChromeManagementV1GraphicsAdapterInfo withAdapter(String adapter) {
        this.adapter = adapter;
        return this;
    }
    
    /**
     * Output only. Represents the graphics card device id.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;

    public GoogleChromeManagementV1GraphicsAdapterInfo withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    
    /**
     * Output only. Version of the GPU driver.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driverVersion")
    public String driverVersion;

    public GoogleChromeManagementV1GraphicsAdapterInfo withDriverVersion(String driverVersion) {
        this.driverVersion = driverVersion;
        return this;
    }
    
    public GoogleChromeManagementV1GraphicsAdapterInfo(){}
}
