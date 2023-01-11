package openapisdk.models.operations;



public class CreateEmployeeResponse {
    public String contentType;
    public CreateEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployeeResult employeeResult;
    public CreateEmployeeResponse withEmployeeResult(openapisdk.models.shared.EmployeeResult employeeResult) {
        this.employeeResult = employeeResult;
        return this;
    }
    public Long statusCode;
    public CreateEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}