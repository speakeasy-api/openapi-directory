package openapisdk.models.operations;



public class CreateUnderstandQueryResponse {
    public String contentType;
    public CreateUnderstandQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUnderstandQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantQuery previewUnderstandAssistantQuery;
    public CreateUnderstandQueryResponse withPreviewUnderstandAssistantQuery(openapisdk.models.shared.PreviewUnderstandAssistantQuery previewUnderstandAssistantQuery) {
        this.previewUnderstandAssistantQuery = previewUnderstandAssistantQuery;
        return this;
    }
}