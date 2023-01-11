package openapisdk.models.operations;



public class GetAllApplicationsResponse {
    public String contentType;
    public GetAllApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedGroupApplicationResult paginatedGroupApplicationResult;
    public GetAllApplicationsResponse withPaginatedGroupApplicationResult(openapisdk.models.shared.PaginatedGroupApplicationResult paginatedGroupApplicationResult) {
        this.paginatedGroupApplicationResult = paginatedGroupApplicationResult;
        return this;
    }
    public Long statusCode;
    public GetAllApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}