package openapisdk.models.operations;



public class PostScrobbleEpisodesResponse {
    public Object[] bulkResponse;
    public PostScrobbleEpisodesResponse withBulkResponse(Object[] bulkResponse) {
        this.bulkResponse = bulkResponse;
        return this;
    }
    public String contentType;
    public PostScrobbleEpisodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostScrobbleEpisodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}