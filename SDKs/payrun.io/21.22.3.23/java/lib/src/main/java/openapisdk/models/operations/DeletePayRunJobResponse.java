package openapisdk.models.operations;



public class DeletePayRunJobResponse {
    public String contentType;
    public DeletePayRunJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeletePayRunJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeletePayRunJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}