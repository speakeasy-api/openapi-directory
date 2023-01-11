package openapisdk.models.operations;



public class GetGroupApplicationsResponse {
    public String contentType;
    public GetGroupApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedGroupApplicationResult paginatedGroupApplicationResult;
    public GetGroupApplicationsResponse withPaginatedGroupApplicationResult(openapisdk.models.shared.PaginatedGroupApplicationResult paginatedGroupApplicationResult) {
        this.paginatedGroupApplicationResult = paginatedGroupApplicationResult;
        return this;
    }
    public Long statusCode;
    public GetGroupApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}