package openapisdk.models.operations;



public class HideTaskResponse {
    public byte[] body;
    public HideTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public HideTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HideTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}