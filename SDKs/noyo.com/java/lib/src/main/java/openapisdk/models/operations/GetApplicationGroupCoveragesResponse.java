package openapisdk.models.operations;



public class GetApplicationGroupCoveragesResponse {
    public String contentType;
    public GetApplicationGroupCoveragesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedGroupCoverageResult paginatedGroupCoverageResult;
    public GetApplicationGroupCoveragesResponse withPaginatedGroupCoverageResult(openapisdk.models.shared.PaginatedGroupCoverageResult paginatedGroupCoverageResult) {
        this.paginatedGroupCoverageResult = paginatedGroupCoverageResult;
        return this;
    }
    public Long statusCode;
    public GetApplicationGroupCoveragesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}