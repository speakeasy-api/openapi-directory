package openapisdk.models.operations;



public class GetEmployeeResponse {
    public String contentType;
    public GetEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployeeResult employeeResult;
    public GetEmployeeResponse withEmployeeResult(openapisdk.models.shared.EmployeeResult employeeResult) {
        this.employeeResult = employeeResult;
        return this;
    }
    public Long statusCode;
    public GetEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}