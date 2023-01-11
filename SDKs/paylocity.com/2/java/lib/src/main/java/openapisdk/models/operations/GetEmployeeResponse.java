package openapisdk.models.operations;



public class GetEmployeeResponse {
    public String contentType;
    public GetEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Employee[] employees;
    public GetEmployeeResponse withEmployees(openapisdk.models.shared.Employee[] employees) {
        this.employees = employees;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetEmployeeResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}