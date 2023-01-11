package openapisdk.models.operations;



public class ListGenresResponse {
    public String contentType;
    public ListGenresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenreList genreList;
    public ListGenresResponse withGenreList(openapisdk.models.shared.GenreList genreList) {
        this.genreList = genreList;
        return this;
    }
    public Long statusCode;
    public ListGenresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}