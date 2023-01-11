package openapisdk.models.operations;



public class GetTicketInfoResponse {
    public byte[] body;
    public GetTicketInfoResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTicketInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTicketInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}