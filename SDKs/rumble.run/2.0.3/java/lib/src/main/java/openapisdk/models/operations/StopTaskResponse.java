package openapisdk.models.operations;



public class StopTaskResponse {
    public byte[] body;
    public StopTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public StopTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}