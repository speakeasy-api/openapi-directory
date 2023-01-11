package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesDeploymentsCreateResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesDeploymentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalDeployment sasPortalDeployment;
    public ProdTtSasportalNodesNodesDeploymentsCreateResponse withSasPortalDeployment(openapisdk.models.shared.SasPortalDeployment sasPortalDeployment) {
        this.sasPortalDeployment = sasPortalDeployment;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesDeploymentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}