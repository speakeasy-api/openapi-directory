package openapisdk.models.operations;



public class GetLocationListResponse {
    public String contentType;
    public GetLocationListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedLocationResult paginatedLocationResult;
    public GetLocationListResponse withPaginatedLocationResult(openapisdk.models.shared.PaginatedLocationResult paginatedLocationResult) {
        this.paginatedLocationResult = paginatedLocationResult;
        return this;
    }
    public Long statusCode;
    public GetLocationListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}