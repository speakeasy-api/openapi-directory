package openapisdk.models.operations;



public class GetPrivilegesResponse {
    public byte[] body;
    public GetPrivilegesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPrivilegesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPrivilegesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}