package openapisdk.models.operations;



public class ListAssistantResponse {
    public String contentType;
    public ListAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListAssistantListAssistantResponse listAssistantResponse;
    public ListAssistantResponse withListAssistantResponse(ListAssistantListAssistantResponse listAssistantResponse) {
        this.listAssistantResponse = listAssistantResponse;
        return this;
    }
    public Long statusCode;
    public ListAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}