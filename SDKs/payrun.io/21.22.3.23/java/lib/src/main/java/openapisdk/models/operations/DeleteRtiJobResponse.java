package openapisdk.models.operations;



public class DeleteRtiJobResponse {
    public String contentType;
    public DeleteRtiJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteRtiJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteRtiJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}