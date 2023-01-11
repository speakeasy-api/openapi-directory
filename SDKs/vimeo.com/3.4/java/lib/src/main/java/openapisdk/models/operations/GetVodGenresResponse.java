package openapisdk.models.operations;



public class GetVodGenresResponse {
    public String contentType;
    public GetVodGenresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodGenresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnDemandGenre[] onDemandGenres;
    public GetVodGenresResponse withOnDemandGenres(openapisdk.models.shared.OnDemandGenre[] onDemandGenres) {
        this.onDemandGenres = onDemandGenres;
        return this;
    }
}