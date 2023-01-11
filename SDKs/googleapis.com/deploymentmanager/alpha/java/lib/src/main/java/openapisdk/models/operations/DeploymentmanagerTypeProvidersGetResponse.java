package openapisdk.models.operations;



public class DeploymentmanagerTypeProvidersGetResponse {
    public String contentType;
    public DeploymentmanagerTypeProvidersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerTypeProvidersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TypeProvider typeProvider;
    public DeploymentmanagerTypeProvidersGetResponse withTypeProvider(openapisdk.models.shared.TypeProvider typeProvider) {
        this.typeProvider = typeProvider;
        return this;
    }
}