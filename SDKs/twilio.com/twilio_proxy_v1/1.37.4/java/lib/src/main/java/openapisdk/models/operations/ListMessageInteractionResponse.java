package openapisdk.models.operations;



public class ListMessageInteractionResponse {
    public String contentType;
    public ListMessageInteractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListMessageInteractionListMessageInteractionResponse listMessageInteractionResponse;
    public ListMessageInteractionResponse withListMessageInteractionResponse(ListMessageInteractionListMessageInteractionResponse listMessageInteractionResponse) {
        this.listMessageInteractionResponse = listMessageInteractionResponse;
        return this;
    }
    public Long statusCode;
    public ListMessageInteractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}