package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesDevicesListResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalListDevicesResponse sasPortalListDevicesResponse;
    public ProdTtSasportalNodesNodesDevicesListResponse withSasPortalListDevicesResponse(openapisdk.models.shared.SasPortalListDevicesResponse sasPortalListDevicesResponse) {
        this.sasPortalListDevicesResponse = sasPortalListDevicesResponse;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}