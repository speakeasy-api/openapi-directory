package openapisdk.models.operations;



public class GetCuratedPodcastsResponse {
    public String contentType;
    public GetCuratedPodcastsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCuratedPodcastsResponse getCuratedPodcastsResponse;
    public GetCuratedPodcastsResponse withGetCuratedPodcastsResponse(openapisdk.models.shared.GetCuratedPodcastsResponse getCuratedPodcastsResponse) {
        this.getCuratedPodcastsResponse = getCuratedPodcastsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCuratedPodcastsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCuratedPodcastsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}