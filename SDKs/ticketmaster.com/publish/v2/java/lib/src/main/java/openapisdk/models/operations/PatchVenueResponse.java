package openapisdk.models.operations;



public class PatchVenueResponse {
    public byte[] body;
    public PatchVenueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatchVenueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchVenueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}