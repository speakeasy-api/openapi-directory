package openapisdk.models.operations;



public class SasportalNodesDevicesUpdateSignedResponse {
    public String contentType;
    public SasportalNodesDevicesUpdateSignedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalDevice sasPortalDevice;
    public SasportalNodesDevicesUpdateSignedResponse withSasPortalDevice(openapisdk.models.shared.SasPortalDevice sasPortalDevice) {
        this.sasPortalDevice = sasPortalDevice;
        return this;
    }
    public Long statusCode;
    public SasportalNodesDevicesUpdateSignedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}