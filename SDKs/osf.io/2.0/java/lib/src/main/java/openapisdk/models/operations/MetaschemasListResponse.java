package openapisdk.models.operations;



public class MetaschemasListResponse {
    public byte[] body;
    public MetaschemasListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MetaschemasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MetaschemasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}