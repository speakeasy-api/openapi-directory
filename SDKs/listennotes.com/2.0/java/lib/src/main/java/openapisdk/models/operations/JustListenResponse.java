package openapisdk.models.operations;



public class JustListenResponse {
    public String contentType;
    public JustListenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EpisodeSimple episodeSimple;
    public JustListenResponse withEpisodeSimple(openapisdk.models.shared.EpisodeSimple episodeSimple) {
        this.episodeSimple = episodeSimple;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JustListenResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JustListenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}