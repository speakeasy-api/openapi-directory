package openapisdk.models.operations;



public class GetOneServiceResponse {
    public byte[] body;
    public GetOneServiceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetOneServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOneServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}