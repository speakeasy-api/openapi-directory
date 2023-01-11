package openapisdk.models.operations;



public class AndroiddeviceprovisioningPartnersDevicesMetadataResponse {
    public String contentType;
    public AndroiddeviceprovisioningPartnersDevicesMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceMetadata deviceMetadata;
    public AndroiddeviceprovisioningPartnersDevicesMetadataResponse withDeviceMetadata(openapisdk.models.shared.DeviceMetadata deviceMetadata) {
        this.deviceMetadata = deviceMetadata;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningPartnersDevicesMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}