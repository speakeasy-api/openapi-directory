package openapisdk.models.operations;



public class GetBestPodcastsResponse {
    public openapisdk.models.shared.BestPodcastsResponse bestPodcastsResponse;
    public GetBestPodcastsResponse withBestPodcastsResponse(openapisdk.models.shared.BestPodcastsResponse bestPodcastsResponse) {
        this.bestPodcastsResponse = bestPodcastsResponse;
        return this;
    }
    public String contentType;
    public GetBestPodcastsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBestPodcastsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBestPodcastsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}