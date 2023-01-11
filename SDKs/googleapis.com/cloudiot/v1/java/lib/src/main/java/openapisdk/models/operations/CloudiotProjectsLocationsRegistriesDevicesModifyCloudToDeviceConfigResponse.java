package openapisdk.models.operations;



public class CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse {
    public String contentType;
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceConfig deviceConfig;
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse withDeviceConfig(openapisdk.models.shared.DeviceConfig deviceConfig) {
        this.deviceConfig = deviceConfig;
        return this;
    }
    public Long statusCode;
    public CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}