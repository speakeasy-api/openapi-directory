package openapisdk.models.operations;



public class GetGenreVodsResponse {
    public String contentType;
    public GetGenreVodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGenreVodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage[] onDemandPages;
    public GetGenreVodsResponse withOnDemandPages(openapisdk.models.shared.OnDemandPage[] onDemandPages) {
        this.onDemandPages = onDemandPages;
        return this;
    }
}