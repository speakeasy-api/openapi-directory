package openapisdk.models.operations;



public class CreateTicketResponse {
    public byte[] body;
    public CreateTicketResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateTicketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTicketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}