package openapisdk.models.operations;



public class PatchAttractionResponse {
    public byte[] body;
    public PatchAttractionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatchAttractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchAttractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}