package openapisdk.models.operations;



public class GetEpisodeRecommendationsResponse {
    public String contentType;
    public GetEpisodeRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEpisodeRecommendationsResponse getEpisodeRecommendationsResponse;
    public GetEpisodeRecommendationsResponse withGetEpisodeRecommendationsResponse(openapisdk.models.shared.GetEpisodeRecommendationsResponse getEpisodeRecommendationsResponse) {
        this.getEpisodeRecommendationsResponse = getEpisodeRecommendationsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEpisodeRecommendationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEpisodeRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}