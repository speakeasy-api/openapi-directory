package openapisdk.models.operations;



public class GetCuratedPodcastByIdResponse {
    public String contentType;
    public GetCuratedPodcastByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CuratedListFull curatedListFull;
    public GetCuratedPodcastByIdResponse withCuratedListFull(openapisdk.models.shared.CuratedListFull curatedListFull) {
        this.curatedListFull = curatedListFull;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCuratedPodcastByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCuratedPodcastByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}