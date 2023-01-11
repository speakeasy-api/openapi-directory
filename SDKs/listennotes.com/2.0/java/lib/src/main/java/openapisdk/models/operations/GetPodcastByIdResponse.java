package openapisdk.models.operations;



public class GetPodcastByIdResponse {
    public String contentType;
    public GetPodcastByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPodcastByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PodcastFull podcastFull;
    public GetPodcastByIdResponse withPodcastFull(openapisdk.models.shared.PodcastFull podcastFull) {
        this.podcastFull = podcastFull;
        return this;
    }
    public Long statusCode;
    public GetPodcastByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}