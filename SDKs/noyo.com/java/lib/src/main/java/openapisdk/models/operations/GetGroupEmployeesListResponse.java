package openapisdk.models.operations;



public class GetGroupEmployeesListResponse {
    public String contentType;
    public GetGroupEmployeesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedEmployeeResult paginatedEmployeeResult;
    public GetGroupEmployeesListResponse withPaginatedEmployeeResult(openapisdk.models.shared.PaginatedEmployeeResult paginatedEmployeeResult) {
        this.paginatedEmployeeResult = paginatedEmployeeResult;
        return this;
    }
    public Long statusCode;
    public GetGroupEmployeesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}