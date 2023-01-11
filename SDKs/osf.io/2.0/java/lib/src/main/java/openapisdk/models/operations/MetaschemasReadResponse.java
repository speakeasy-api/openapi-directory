package openapisdk.models.operations;



public class MetaschemasReadResponse {
    public byte[] body;
    public MetaschemasReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MetaschemasReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MetaschemasReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}