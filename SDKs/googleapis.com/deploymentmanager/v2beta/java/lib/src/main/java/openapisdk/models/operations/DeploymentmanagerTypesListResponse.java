package openapisdk.models.operations;



public class DeploymentmanagerTypesListResponse {
    public String contentType;
    public DeploymentmanagerTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TypesListResponse typesListResponse;
    public DeploymentmanagerTypesListResponse withTypesListResponse(openapisdk.models.shared.TypesListResponse typesListResponse) {
        this.typesListResponse = typesListResponse;
        return this;
    }
}