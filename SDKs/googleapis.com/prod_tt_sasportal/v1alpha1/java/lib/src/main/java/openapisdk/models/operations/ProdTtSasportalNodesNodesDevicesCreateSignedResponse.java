package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesDevicesCreateSignedResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesDevicesCreateSignedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalDevice sasPortalDevice;
    public ProdTtSasportalNodesNodesDevicesCreateSignedResponse withSasPortalDevice(openapisdk.models.shared.SasPortalDevice sasPortalDevice) {
        this.sasPortalDevice = sasPortalDevice;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesDevicesCreateSignedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}