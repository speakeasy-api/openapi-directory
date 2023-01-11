package openapisdk.models.operations;



public class GetPodcastsInBatchResponse {
    public String contentType;
    public GetPodcastsInBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPodcastsInBatchResponse getPodcastsInBatchResponse;
    public GetPodcastsInBatchResponse withGetPodcastsInBatchResponse(openapisdk.models.shared.GetPodcastsInBatchResponse getPodcastsInBatchResponse) {
        this.getPodcastsInBatchResponse = getPodcastsInBatchResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPodcastsInBatchResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPodcastsInBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}