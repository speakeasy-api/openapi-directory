package openapisdk.models.operations;



public class GetUsersResponse {
    public byte[] body;
    public GetUsersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}