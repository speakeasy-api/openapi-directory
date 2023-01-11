package openapisdk.models.operations;



public class GetTransformDefinitionFromApplicationResponse {
    public String contentType;
    public GetTransformDefinitionFromApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTransformDefinitionFromApplicationResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetTransformDefinitionFromApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransformDefinition transformDefinition;
    public GetTransformDefinitionFromApplicationResponse withTransformDefinition(openapisdk.models.shared.TransformDefinition transformDefinition) {
        this.transformDefinition = transformDefinition;
        return this;
    }
}