package openapisdk.models.operations;



public class ProdTtSasportalNodesDevicesUpdateSignedResponse {
    public String contentType;
    public ProdTtSasportalNodesDevicesUpdateSignedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalDevice sasPortalDevice;
    public ProdTtSasportalNodesDevicesUpdateSignedResponse withSasPortalDevice(openapisdk.models.shared.SasPortalDevice sasPortalDevice) {
        this.sasPortalDevice = sasPortalDevice;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesDevicesUpdateSignedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}