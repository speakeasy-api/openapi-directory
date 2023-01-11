package openapisdk.models.operations;



public class DeleteEmployerTagResponse {
    public String contentType;
    public DeleteEmployerTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteEmployerTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteEmployerTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}