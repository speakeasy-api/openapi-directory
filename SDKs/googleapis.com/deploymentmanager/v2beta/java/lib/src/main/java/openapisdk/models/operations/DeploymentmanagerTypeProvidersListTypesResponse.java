package openapisdk.models.operations;



public class DeploymentmanagerTypeProvidersListTypesResponse {
    public String contentType;
    public DeploymentmanagerTypeProvidersListTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerTypeProvidersListTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TypeProvidersListTypesResponse typeProvidersListTypesResponse;
    public DeploymentmanagerTypeProvidersListTypesResponse withTypeProvidersListTypesResponse(openapisdk.models.shared.TypeProvidersListTypesResponse typeProvidersListTypesResponse) {
        this.typeProvidersListTypesResponse = typeProvidersListTypesResponse;
        return this;
    }
}