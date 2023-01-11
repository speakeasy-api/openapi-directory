package openapisdk.models.operations;



public class PostScrobbleShowsResponse {
    public Object[] bulkResponse;
    public PostScrobbleShowsResponse withBulkResponse(Object[] bulkResponse) {
        this.bulkResponse = bulkResponse;
        return this;
    }
    public String contentType;
    public PostScrobbleShowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostScrobbleShowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}