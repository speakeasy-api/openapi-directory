package openapisdk.models.operations;



public class FetchUnderstandAssistantFallbackActionsResponse {
    public String contentType;
    public FetchUnderstandAssistantFallbackActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandAssistantFallbackActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantAssistantFallbackActions previewUnderstandAssistantAssistantFallbackActions;
    public FetchUnderstandAssistantFallbackActionsResponse withPreviewUnderstandAssistantAssistantFallbackActions(openapisdk.models.shared.PreviewUnderstandAssistantAssistantFallbackActions previewUnderstandAssistantAssistantFallbackActions) {
        this.previewUnderstandAssistantAssistantFallbackActions = previewUnderstandAssistantAssistantFallbackActions;
        return this;
    }
}