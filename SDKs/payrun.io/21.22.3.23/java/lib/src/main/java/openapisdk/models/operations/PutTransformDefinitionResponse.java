package openapisdk.models.operations;



public class PutTransformDefinitionResponse {
    public String contentType;
    public PutTransformDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutTransformDefinitionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutTransformDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransformDefinition transformDefinition;
    public PutTransformDefinitionResponse withTransformDefinition(openapisdk.models.shared.TransformDefinition transformDefinition) {
        this.transformDefinition = transformDefinition;
        return this;
    }
}