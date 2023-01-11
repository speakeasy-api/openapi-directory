package openapisdk.models.operations;



public class PingResponse {
    public String contentType;
    public PingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}