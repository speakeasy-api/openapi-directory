package openapisdk.models.operations;



public class GetPayLineFromEmployeeResponse {
    public String contentType;
    public GetPayLineFromEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayLineFromEmployeeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayLine payLine;
    public GetPayLineFromEmployeeResponse withPayLine(openapisdk.models.shared.PayLine payLine) {
        this.payLine = payLine;
        return this;
    }
    public Long statusCode;
    public GetPayLineFromEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}