package openapisdk.models.operations;



public class GetEmployeeRevisionByNumberResponse {
    public String contentType;
    public GetEmployeeRevisionByNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employee employee;
    public GetEmployeeRevisionByNumberResponse withEmployee(openapisdk.models.shared.Employee employee) {
        this.employee = employee;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployeeRevisionByNumberResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetEmployeeRevisionByNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}