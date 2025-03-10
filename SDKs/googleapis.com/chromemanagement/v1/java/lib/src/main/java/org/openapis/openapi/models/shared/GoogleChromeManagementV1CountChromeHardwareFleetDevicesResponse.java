/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse - Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
 */
public class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse {
    /**
     * The DeviceHardwareCountReport for device cpu type (for example Intel(R) Core(TM) i7-10610U CPU @ 1.80GHz).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuReports")
    public GoogleChromeManagementV1DeviceHardwareCountReport[] cpuReports;

    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse withCpuReports(GoogleChromeManagementV1DeviceHardwareCountReport[] cpuReports) {
        this.cpuReports = cpuReports;
        return this;
    }
    
    /**
     * The DeviceHardwareCountReport for device memory amount in gigabytes (for example 16).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryReports")
    public GoogleChromeManagementV1DeviceHardwareCountReport[] memoryReports;

    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse withMemoryReports(GoogleChromeManagementV1DeviceHardwareCountReport[] memoryReports) {
        this.memoryReports = memoryReports;
        return this;
    }
    
    /**
     * The DeviceHardwareCountReport for device model type (for example Acer C7 Chromebook).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelReports")
    public GoogleChromeManagementV1DeviceHardwareCountReport[] modelReports;

    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse withModelReports(GoogleChromeManagementV1DeviceHardwareCountReport[] modelReports) {
        this.modelReports = modelReports;
        return this;
    }
    
    /**
     * The DeviceHardwareCountReport for device storage amount in gigabytes (for example 128).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageReports")
    public GoogleChromeManagementV1DeviceHardwareCountReport[] storageReports;

    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse withStorageReports(GoogleChromeManagementV1DeviceHardwareCountReport[] storageReports) {
        this.storageReports = storageReports;
        return this;
    }
    
    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse(){}
}
