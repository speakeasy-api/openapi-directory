package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsApisDeploymentsListResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsApisDeploymentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListApiDeploymentsResponse listApiDeploymentsResponse;
    public ApigeeregistryProjectsLocationsApisDeploymentsListResponse withListApiDeploymentsResponse(openapisdk.models.shared.ListApiDeploymentsResponse listApiDeploymentsResponse) {
        this.listApiDeploymentsResponse = listApiDeploymentsResponse;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsApisDeploymentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}