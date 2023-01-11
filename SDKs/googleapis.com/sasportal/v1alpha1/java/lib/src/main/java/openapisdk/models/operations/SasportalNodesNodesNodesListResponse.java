package openapisdk.models.operations;



public class SasportalNodesNodesNodesListResponse {
    public String contentType;
    public SasportalNodesNodesNodesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalListNodesResponse sasPortalListNodesResponse;
    public SasportalNodesNodesNodesListResponse withSasPortalListNodesResponse(openapisdk.models.shared.SasPortalListNodesResponse sasPortalListNodesResponse) {
        this.sasPortalListNodesResponse = sasPortalListNodesResponse;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesNodesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}