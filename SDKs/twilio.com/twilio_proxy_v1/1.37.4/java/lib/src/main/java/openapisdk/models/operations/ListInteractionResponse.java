package openapisdk.models.operations;



public class ListInteractionResponse {
    public String contentType;
    public ListInteractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListInteractionListInteractionResponse listInteractionResponse;
    public ListInteractionResponse withListInteractionResponse(ListInteractionListInteractionResponse listInteractionResponse) {
        this.listInteractionResponse = listInteractionResponse;
        return this;
    }
    public Long statusCode;
    public ListInteractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}