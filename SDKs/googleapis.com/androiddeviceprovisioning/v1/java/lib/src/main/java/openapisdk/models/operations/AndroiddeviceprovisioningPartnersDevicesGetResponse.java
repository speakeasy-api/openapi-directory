package openapisdk.models.operations;



public class AndroiddeviceprovisioningPartnersDevicesGetResponse {
    public String contentType;
    public AndroiddeviceprovisioningPartnersDevicesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device device;
    public AndroiddeviceprovisioningPartnersDevicesGetResponse withDevice(openapisdk.models.shared.Device device) {
        this.device = device;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningPartnersDevicesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}