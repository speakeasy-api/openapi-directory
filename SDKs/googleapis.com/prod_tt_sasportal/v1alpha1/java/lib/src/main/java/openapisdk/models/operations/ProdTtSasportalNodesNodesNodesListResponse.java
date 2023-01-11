package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesNodesListResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesNodesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalListNodesResponse sasPortalListNodesResponse;
    public ProdTtSasportalNodesNodesNodesListResponse withSasPortalListNodesResponse(openapisdk.models.shared.SasPortalListNodesResponse sasPortalListNodesResponse) {
        this.sasPortalListNodesResponse = sasPortalListNodesResponse;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesNodesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}