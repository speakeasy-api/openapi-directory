package openapisdk.models.operations;



public class DeleteEmployeeSecretResponse {
    public String contentType;
    public DeleteEmployeeSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteEmployeeSecretResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteEmployeeSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}