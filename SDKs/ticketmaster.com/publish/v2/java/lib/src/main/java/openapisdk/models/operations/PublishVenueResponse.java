package openapisdk.models.operations;



public class PublishVenueResponse {
    public byte[] body;
    public PublishVenueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishVenueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PublishVenueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}