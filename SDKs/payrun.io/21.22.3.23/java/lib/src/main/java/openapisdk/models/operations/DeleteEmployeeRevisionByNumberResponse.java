package openapisdk.models.operations;



public class DeleteEmployeeRevisionByNumberResponse {
    public String contentType;
    public DeleteEmployeeRevisionByNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteEmployeeRevisionByNumberResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteEmployeeRevisionByNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}