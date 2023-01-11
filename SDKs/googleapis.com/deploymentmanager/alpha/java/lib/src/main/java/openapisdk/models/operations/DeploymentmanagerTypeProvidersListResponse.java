package openapisdk.models.operations;



public class DeploymentmanagerTypeProvidersListResponse {
    public String contentType;
    public DeploymentmanagerTypeProvidersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerTypeProvidersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TypeProvidersListResponse typeProvidersListResponse;
    public DeploymentmanagerTypeProvidersListResponse withTypeProvidersListResponse(openapisdk.models.shared.TypeProvidersListResponse typeProvidersListResponse) {
        this.typeProvidersListResponse = typeProvidersListResponse;
        return this;
    }
}