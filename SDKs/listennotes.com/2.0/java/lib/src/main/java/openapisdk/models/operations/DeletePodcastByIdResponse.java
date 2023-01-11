package openapisdk.models.operations;



public class DeletePodcastByIdResponse {
    public String contentType;
    public DeletePodcastByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletePodcastResponse deletePodcastResponse;
    public DeletePodcastByIdResponse withDeletePodcastResponse(openapisdk.models.shared.DeletePodcastResponse deletePodcastResponse) {
        this.deletePodcastResponse = deletePodcastResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeletePodcastByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeletePodcastByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}