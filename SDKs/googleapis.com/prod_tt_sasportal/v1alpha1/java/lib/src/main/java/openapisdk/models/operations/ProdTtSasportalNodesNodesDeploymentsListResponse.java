package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesDeploymentsListResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesDeploymentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalListDeploymentsResponse sasPortalListDeploymentsResponse;
    public ProdTtSasportalNodesNodesDeploymentsListResponse withSasPortalListDeploymentsResponse(openapisdk.models.shared.SasPortalListDeploymentsResponse sasPortalListDeploymentsResponse) {
        this.sasPortalListDeploymentsResponse = sasPortalListDeploymentsResponse;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesDeploymentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}