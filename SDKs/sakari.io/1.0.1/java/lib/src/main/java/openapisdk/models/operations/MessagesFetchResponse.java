package openapisdk.models.operations;



public class MessagesFetchResponse {
    public String contentType;
    public MessagesFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MessageResponse messageResponse;
    public MessagesFetchResponse withMessageResponse(openapisdk.models.shared.MessageResponse messageResponse) {
        this.messageResponse = messageResponse;
        return this;
    }
    public Long statusCode;
    public MessagesFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}