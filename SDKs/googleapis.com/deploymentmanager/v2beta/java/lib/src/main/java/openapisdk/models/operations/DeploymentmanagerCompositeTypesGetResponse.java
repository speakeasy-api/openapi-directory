package openapisdk.models.operations;



public class DeploymentmanagerCompositeTypesGetResponse {
    public openapisdk.models.shared.CompositeType compositeType;
    public DeploymentmanagerCompositeTypesGetResponse withCompositeType(openapisdk.models.shared.CompositeType compositeType) {
        this.compositeType = compositeType;
        return this;
    }
    public String contentType;
    public DeploymentmanagerCompositeTypesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeploymentmanagerCompositeTypesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}