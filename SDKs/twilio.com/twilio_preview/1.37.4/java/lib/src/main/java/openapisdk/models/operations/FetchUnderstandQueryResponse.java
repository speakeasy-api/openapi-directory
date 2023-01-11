package openapisdk.models.operations;



public class FetchUnderstandQueryResponse {
    public String contentType;
    public FetchUnderstandQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantQuery previewUnderstandAssistantQuery;
    public FetchUnderstandQueryResponse withPreviewUnderstandAssistantQuery(openapisdk.models.shared.PreviewUnderstandAssistantQuery previewUnderstandAssistantQuery) {
        this.previewUnderstandAssistantQuery = previewUnderstandAssistantQuery;
        return this;
    }
}