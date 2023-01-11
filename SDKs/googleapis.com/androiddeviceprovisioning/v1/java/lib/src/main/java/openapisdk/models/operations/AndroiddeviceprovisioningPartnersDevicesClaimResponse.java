package openapisdk.models.operations;



public class AndroiddeviceprovisioningPartnersDevicesClaimResponse {
    public openapisdk.models.shared.ClaimDeviceResponse claimDeviceResponse;
    public AndroiddeviceprovisioningPartnersDevicesClaimResponse withClaimDeviceResponse(openapisdk.models.shared.ClaimDeviceResponse claimDeviceResponse) {
        this.claimDeviceResponse = claimDeviceResponse;
        return this;
    }
    public String contentType;
    public AndroiddeviceprovisioningPartnersDevicesClaimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningPartnersDevicesClaimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}