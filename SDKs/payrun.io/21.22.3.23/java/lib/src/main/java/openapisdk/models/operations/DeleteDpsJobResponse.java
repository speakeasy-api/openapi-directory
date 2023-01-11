package openapisdk.models.operations;



public class DeleteDpsJobResponse {
    public String contentType;
    public DeleteDpsJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteDpsJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteDpsJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}