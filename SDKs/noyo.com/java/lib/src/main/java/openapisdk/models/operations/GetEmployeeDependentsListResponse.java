package openapisdk.models.operations;



public class GetEmployeeDependentsListResponse {
    public String contentType;
    public GetEmployeeDependentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedDependentResult paginatedDependentResult;
    public GetEmployeeDependentsListResponse withPaginatedDependentResult(openapisdk.models.shared.PaginatedDependentResult paginatedDependentResult) {
        this.paginatedDependentResult = paginatedDependentResult;
        return this;
    }
    public Long statusCode;
    public GetEmployeeDependentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}