package openapisdk.models.operations;



public class GetAllEmployeesResponse {
    public String contentType;
    public GetAllEmployeesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllEmployeesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EmployeeInfo[] employeeInfos;
    public GetAllEmployeesResponse withEmployeeInfos(openapisdk.models.shared.EmployeeInfo[] employeeInfos) {
        this.employeeInfos = employeeInfos;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetAllEmployeesResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}