package openapisdk.models.operations;



public class DeletePayRunTagResponse {
    public String contentType;
    public DeletePayRunTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeletePayRunTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeletePayRunTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}