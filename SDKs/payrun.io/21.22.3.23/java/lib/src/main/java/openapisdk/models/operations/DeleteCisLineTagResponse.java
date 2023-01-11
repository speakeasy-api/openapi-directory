package openapisdk.models.operations;



public class DeleteCisLineTagResponse {
    public String contentType;
    public DeleteCisLineTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteCisLineTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteCisLineTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}