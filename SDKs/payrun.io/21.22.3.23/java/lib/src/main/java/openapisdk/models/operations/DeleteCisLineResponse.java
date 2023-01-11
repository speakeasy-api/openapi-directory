package openapisdk.models.operations;



public class DeleteCisLineResponse {
    public String contentType;
    public DeleteCisLineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteCisLineResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteCisLineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}