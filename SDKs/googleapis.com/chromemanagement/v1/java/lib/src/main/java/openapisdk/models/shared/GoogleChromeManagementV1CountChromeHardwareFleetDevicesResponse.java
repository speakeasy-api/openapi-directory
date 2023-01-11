package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
 * Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
**/
public class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuReports")
    public GoogleChromeManagementV1DeviceHardwareCountReport[] cpuReports;
    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse withCpuReports(GoogleChromeManagementV1DeviceHardwareCountReport[] cpuReports) {
        this.cpuReports = cpuReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryReports")
    public GoogleChromeManagementV1DeviceHardwareCountReport[] memoryReports;
    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse withMemoryReports(GoogleChromeManagementV1DeviceHardwareCountReport[] memoryReports) {
        this.memoryReports = memoryReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelReports")
    public GoogleChromeManagementV1DeviceHardwareCountReport[] modelReports;
    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse withModelReports(GoogleChromeManagementV1DeviceHardwareCountReport[] modelReports) {
        this.modelReports = modelReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageReports")
    public GoogleChromeManagementV1DeviceHardwareCountReport[] storageReports;
    public GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse withStorageReports(GoogleChromeManagementV1DeviceHardwareCountReport[] storageReports) {
        this.storageReports = storageReports;
        return this;
    }
}