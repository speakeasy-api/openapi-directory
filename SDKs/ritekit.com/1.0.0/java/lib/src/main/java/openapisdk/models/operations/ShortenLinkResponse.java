package openapisdk.models.operations;



public class ShortenLinkResponse {
    public String contentType;
    public ShortenLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ShortenLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}