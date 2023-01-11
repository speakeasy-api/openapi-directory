package openapisdk.models.operations;



public class EditEmployeeResponse {
    public String contentType;
    public EditEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployeeResult employeeResult;
    public EditEmployeeResponse withEmployeeResult(openapisdk.models.shared.EmployeeResult employeeResult) {
        this.employeeResult = employeeResult;
        return this;
    }
    public Long statusCode;
    public EditEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}