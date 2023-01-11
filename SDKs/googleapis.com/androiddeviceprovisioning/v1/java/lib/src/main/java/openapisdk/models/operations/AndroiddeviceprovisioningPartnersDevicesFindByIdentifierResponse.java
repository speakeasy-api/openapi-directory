package openapisdk.models.operations;



public class AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse {
    public String contentType;
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FindDevicesByDeviceIdentifierResponse findDevicesByDeviceIdentifierResponse;
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse withFindDevicesByDeviceIdentifierResponse(openapisdk.models.shared.FindDevicesByDeviceIdentifierResponse findDevicesByDeviceIdentifierResponse) {
        this.findDevicesByDeviceIdentifierResponse = findDevicesByDeviceIdentifierResponse;
        return this;
    }
    public Long statusCode;
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}