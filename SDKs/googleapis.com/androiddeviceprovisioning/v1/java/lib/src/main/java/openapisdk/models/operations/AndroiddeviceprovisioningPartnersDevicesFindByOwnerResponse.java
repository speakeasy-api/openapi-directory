package openapisdk.models.operations;



public class AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse {
    public String contentType;
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FindDevicesByOwnerResponse findDevicesByOwnerResponse;
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse withFindDevicesByOwnerResponse(openapisdk.models.shared.FindDevicesByOwnerResponse findDevicesByOwnerResponse) {
        this.findDevicesByOwnerResponse = findDevicesByOwnerResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}