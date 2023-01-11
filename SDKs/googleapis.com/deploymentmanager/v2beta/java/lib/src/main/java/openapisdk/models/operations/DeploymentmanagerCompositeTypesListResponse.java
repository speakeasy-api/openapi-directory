package openapisdk.models.operations;



public class DeploymentmanagerCompositeTypesListResponse {
    public openapisdk.models.shared.CompositeTypesListResponse compositeTypesListResponse;
    public DeploymentmanagerCompositeTypesListResponse withCompositeTypesListResponse(openapisdk.models.shared.CompositeTypesListResponse compositeTypesListResponse) {
        this.compositeTypesListResponse = compositeTypesListResponse;
        return this;
    }
    public String contentType;
    public DeploymentmanagerCompositeTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerCompositeTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}