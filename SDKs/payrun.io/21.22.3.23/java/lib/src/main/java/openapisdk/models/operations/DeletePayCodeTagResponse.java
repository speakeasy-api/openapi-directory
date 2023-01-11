package openapisdk.models.operations;



public class DeletePayCodeTagResponse {
    public String contentType;
    public DeletePayCodeTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeletePayCodeTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeletePayCodeTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}