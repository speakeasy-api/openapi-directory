package openapisdk.models.operations;



public class DeleteEmployeeTagResponse {
    public String contentType;
    public DeleteEmployeeTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteEmployeeTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteEmployeeTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}