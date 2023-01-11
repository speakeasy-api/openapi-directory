package openapisdk.models.operations;



public class ListUnderstandAssistantResponse {
    public String contentType;
    public ListUnderstandAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUnderstandAssistantListUnderstandAssistantResponse listUnderstandAssistantResponse;
    public ListUnderstandAssistantResponse withListUnderstandAssistantResponse(ListUnderstandAssistantListUnderstandAssistantResponse listUnderstandAssistantResponse) {
        this.listUnderstandAssistantResponse = listUnderstandAssistantResponse;
        return this;
    }
    public Long statusCode;
    public ListUnderstandAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}