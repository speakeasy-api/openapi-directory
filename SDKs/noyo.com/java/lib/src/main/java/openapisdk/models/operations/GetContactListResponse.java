package openapisdk.models.operations;



public class GetContactListResponse {
    public String contentType;
    public GetContactListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedContactResult paginatedContactResult;
    public GetContactListResponse withPaginatedContactResult(openapisdk.models.shared.PaginatedContactResult paginatedContactResult) {
        this.paginatedContactResult = paginatedContactResult;
        return this;
    }
    public Long statusCode;
    public GetContactListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}