package openapisdk.models.operations;



public class GetPodcastRecommendationsResponse {
    public String contentType;
    public GetPodcastRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPodcastRecommendationsResponse getPodcastRecommendationsResponse;
    public GetPodcastRecommendationsResponse withGetPodcastRecommendationsResponse(openapisdk.models.shared.GetPodcastRecommendationsResponse getPodcastRecommendationsResponse) {
        this.getPodcastRecommendationsResponse = getPodcastRecommendationsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPodcastRecommendationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPodcastRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}