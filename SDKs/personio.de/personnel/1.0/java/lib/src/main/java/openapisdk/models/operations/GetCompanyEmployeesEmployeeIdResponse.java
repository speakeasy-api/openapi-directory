package openapisdk.models.operations;



public class GetCompanyEmployeesEmployeeIdResponse {
    public String contentType;
    public GetCompanyEmployeesEmployeeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployeeResponse employeeResponse;
    public GetCompanyEmployeesEmployeeIdResponse withEmployeeResponse(openapisdk.models.shared.EmployeeResponse employeeResponse) {
        this.employeeResponse = employeeResponse;
        return this;
    }
    public Long statusCode;
    public GetCompanyEmployeesEmployeeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}