package openapisdk.models.operations;



public class GetDevelopersResponse {
    public byte[] body;
    public GetDevelopersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDevelopersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDevelopersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}