package openapisdk.models.operations;



public class LogsReadResponse {
    public byte[] body;
    public LogsReadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LogsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LogsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}