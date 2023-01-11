package openapisdk.models.operations;



public class UpdateUnderstandQueryResponse {
    public String contentType;
    public UpdateUnderstandQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantQuery previewUnderstandAssistantQuery;
    public UpdateUnderstandQueryResponse withPreviewUnderstandAssistantQuery(openapisdk.models.shared.PreviewUnderstandAssistantQuery previewUnderstandAssistantQuery) {
        this.previewUnderstandAssistantQuery = previewUnderstandAssistantQuery;
        return this;
    }
}