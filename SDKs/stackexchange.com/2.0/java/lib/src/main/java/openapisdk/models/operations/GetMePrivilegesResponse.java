package openapisdk.models.operations;



public class GetMePrivilegesResponse {
    public byte[] body;
    public GetMePrivilegesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMePrivilegesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMePrivilegesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}