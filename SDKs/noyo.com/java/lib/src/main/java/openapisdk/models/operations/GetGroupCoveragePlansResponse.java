package openapisdk.models.operations;



public class GetGroupCoveragePlansResponse {
    public String contentType;
    public GetGroupCoveragePlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedCoveragePlanResult paginatedCoveragePlanResult;
    public GetGroupCoveragePlansResponse withPaginatedCoveragePlanResult(openapisdk.models.shared.PaginatedCoveragePlanResult paginatedCoveragePlanResult) {
        this.paginatedCoveragePlanResult = paginatedCoveragePlanResult;
        return this;
    }
    public Long statusCode;
    public GetGroupCoveragePlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}