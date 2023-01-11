package openapisdk.models.operations;



public class DeleteProjectResponse {
    public byte[] body;
    public DeleteProjectResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}