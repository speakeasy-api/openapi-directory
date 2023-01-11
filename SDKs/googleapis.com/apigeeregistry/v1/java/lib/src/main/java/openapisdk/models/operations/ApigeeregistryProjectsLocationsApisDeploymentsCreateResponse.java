package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse {
    public openapisdk.models.shared.ApiDeployment apiDeployment;
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse withApiDeployment(openapisdk.models.shared.ApiDeployment apiDeployment) {
        this.apiDeployment = apiDeployment;
        return this;
    }
    public String contentType;
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}