package openapisdk.models.operations;



public class SasportalNodesNodesDevicesCreateResponse {
    public String contentType;
    public SasportalNodesNodesDevicesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalDevice sasPortalDevice;
    public SasportalNodesNodesDevicesCreateResponse withSasPortalDevice(openapisdk.models.shared.SasPortalDevice sasPortalDevice) {
        this.sasPortalDevice = sasPortalDevice;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesDevicesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}