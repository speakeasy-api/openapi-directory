package openapisdk.models.operations;



public class GetGroupsResponse {
    public String contentType;
    public GetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedGroupResult paginatedGroupResult;
    public GetGroupsResponse withPaginatedGroupResult(openapisdk.models.shared.PaginatedGroupResult paginatedGroupResult) {
        this.paginatedGroupResult = paginatedGroupResult;
        return this;
    }
    public Long statusCode;
    public GetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}