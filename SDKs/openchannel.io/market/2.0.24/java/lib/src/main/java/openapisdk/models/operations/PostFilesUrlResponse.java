package openapisdk.models.operations;



public class PostFilesUrlResponse {
    public byte[] body;
    public PostFilesUrlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostFilesUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFilesUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}