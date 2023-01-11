package openapisdk.models.operations;



public class SubmitPodcastResponse {
    public String contentType;
    public SubmitPodcastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public SubmitPodcastResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public SubmitPodcastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubmitPodcastResponse submitPodcastResponse;
    public SubmitPodcastResponse withSubmitPodcastResponse(openapisdk.models.shared.SubmitPodcastResponse submitPodcastResponse) {
        this.submitPodcastResponse = submitPodcastResponse;
        return this;
    }
}