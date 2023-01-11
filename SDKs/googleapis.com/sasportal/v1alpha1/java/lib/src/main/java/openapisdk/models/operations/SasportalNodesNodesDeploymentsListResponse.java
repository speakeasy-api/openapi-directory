package openapisdk.models.operations;



public class SasportalNodesNodesDeploymentsListResponse {
    public String contentType;
    public SasportalNodesNodesDeploymentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalListDeploymentsResponse sasPortalListDeploymentsResponse;
    public SasportalNodesNodesDeploymentsListResponse withSasPortalListDeploymentsResponse(openapisdk.models.shared.SasPortalListDeploymentsResponse sasPortalListDeploymentsResponse) {
        this.sasPortalListDeploymentsResponse = sasPortalListDeploymentsResponse;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesDeploymentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}