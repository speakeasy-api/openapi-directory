package openapisdk.models.operations;



public class GetCompanyEmployeesResponse {
    public String contentType;
    public GetCompanyEmployeesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmployeesResponse employeesResponse;
    public GetCompanyEmployeesResponse withEmployeesResponse(openapisdk.models.shared.EmployeesResponse employeesResponse) {
        this.employeesResponse = employeesResponse;
        return this;
    }
    public Long statusCode;
    public GetCompanyEmployeesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}