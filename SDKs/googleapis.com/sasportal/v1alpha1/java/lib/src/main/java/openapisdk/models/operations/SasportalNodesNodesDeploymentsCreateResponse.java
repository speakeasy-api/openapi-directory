package openapisdk.models.operations;



public class SasportalNodesNodesDeploymentsCreateResponse {
    public String contentType;
    public SasportalNodesNodesDeploymentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalDeployment sasPortalDeployment;
    public SasportalNodesNodesDeploymentsCreateResponse withSasPortalDeployment(openapisdk.models.shared.SasPortalDeployment sasPortalDeployment) {
        this.sasPortalDeployment = sasPortalDeployment;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesDeploymentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}