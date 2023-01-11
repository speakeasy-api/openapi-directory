package openapisdk.models.operations;



public class DeleteTagResponse {
    public byte[] body;
    public DeleteTagResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}