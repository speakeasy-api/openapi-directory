package openapisdk.models.operations;



public class PostFilesResponse {
    public byte[] body;
    public PostFilesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}