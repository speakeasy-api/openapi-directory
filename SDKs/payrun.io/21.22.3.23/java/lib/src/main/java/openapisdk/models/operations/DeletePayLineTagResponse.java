package openapisdk.models.operations;



public class DeletePayLineTagResponse {
    public String contentType;
    public DeletePayLineTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeletePayLineTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeletePayLineTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}