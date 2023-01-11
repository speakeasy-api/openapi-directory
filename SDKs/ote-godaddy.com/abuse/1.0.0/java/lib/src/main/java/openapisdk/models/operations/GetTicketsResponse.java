package openapisdk.models.operations;



public class GetTicketsResponse {
    public byte[] body;
    public GetTicketsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTicketsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTicketsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}