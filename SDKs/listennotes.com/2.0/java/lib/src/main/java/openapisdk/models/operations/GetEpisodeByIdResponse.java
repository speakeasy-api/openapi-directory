package openapisdk.models.operations;



public class GetEpisodeByIdResponse {
    public String contentType;
    public GetEpisodeByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EpisodeFull episodeFull;
    public GetEpisodeByIdResponse withEpisodeFull(openapisdk.models.shared.EpisodeFull episodeFull) {
        this.episodeFull = episodeFull;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEpisodeByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEpisodeByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}