package openapisdk.models.operations;



public class GamesMoviesReadResponse {
    public String contentType;
    public GamesMoviesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Movie movie;
    public GamesMoviesReadResponse withMovie(openapisdk.models.shared.Movie movie) {
        this.movie = movie;
        return this;
    }
    public Long statusCode;
    public GamesMoviesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}