package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesDevicesCreateResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesDevicesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalDevice sasPortalDevice;
    public ProdTtSasportalNodesNodesDevicesCreateResponse withSasPortalDevice(openapisdk.models.shared.SasPortalDevice sasPortalDevice) {
        this.sasPortalDevice = sasPortalDevice;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesDevicesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}