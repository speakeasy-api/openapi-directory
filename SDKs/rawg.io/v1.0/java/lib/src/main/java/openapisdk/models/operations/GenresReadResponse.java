package openapisdk.models.operations;



public class GenresReadResponse {
    public String contentType;
    public GenresReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenreSingle genreSingle;
    public GenresReadResponse withGenreSingle(openapisdk.models.shared.GenreSingle genreSingle) {
        this.genreSingle = genreSingle;
        return this;
    }
    public Long statusCode;
    public GenresReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}