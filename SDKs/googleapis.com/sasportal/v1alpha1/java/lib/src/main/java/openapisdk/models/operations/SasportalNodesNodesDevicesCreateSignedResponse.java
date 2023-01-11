package openapisdk.models.operations;



public class SasportalNodesNodesDevicesCreateSignedResponse {
    public String contentType;
    public SasportalNodesNodesDevicesCreateSignedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalDevice sasPortalDevice;
    public SasportalNodesNodesDevicesCreateSignedResponse withSasPortalDevice(openapisdk.models.shared.SasPortalDevice sasPortalDevice) {
        this.sasPortalDevice = sasPortalDevice;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesDevicesCreateSignedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}