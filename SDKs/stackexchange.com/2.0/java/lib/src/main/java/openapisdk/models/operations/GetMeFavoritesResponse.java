package openapisdk.models.operations;



public class GetMeFavoritesResponse {
    public byte[] body;
    public GetMeFavoritesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeFavoritesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeFavoritesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}