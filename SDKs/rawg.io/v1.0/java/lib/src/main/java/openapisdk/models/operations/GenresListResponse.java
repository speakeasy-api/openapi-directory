package openapisdk.models.operations;



public class GenresListResponse {
    public String contentType;
    public GenresListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenresListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GenresList200ApplicationJson genresList200ApplicationJSONObject;
    public GenresListResponse withGenresList200ApplicationJsonObject(GenresList200ApplicationJson genresList200ApplicationJSONObject) {
        this.genresList200ApplicationJSONObject = genresList200ApplicationJSONObject;
        return this;
    }
}