package openapisdk.models.operations;



public class AddEmployeeResponse {
    public String contentType;
    public AddEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EmployeeIdResponse[] employeeIdResponses;
    public AddEmployeeResponse withEmployeeIdResponses(openapisdk.models.shared.EmployeeIdResponse[] employeeIdResponses) {
        this.employeeIdResponses = employeeIdResponses;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public AddEmployeeResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}