package openapisdk.models.operations;



public class GetUsersIdsResponse {
    public byte[] body;
    public GetUsersIdsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUsersIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}