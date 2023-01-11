package openapisdk.models.operations;



public class DeleteCisJobResponse {
    public String contentType;
    public DeleteCisJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteCisJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteCisJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}