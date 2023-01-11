package openapisdk.models.operations;



public class UpdateUnderstandAssistantFallbackActionsResponse {
    public String contentType;
    public UpdateUnderstandAssistantFallbackActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandAssistantFallbackActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantAssistantFallbackActions previewUnderstandAssistantAssistantFallbackActions;
    public UpdateUnderstandAssistantFallbackActionsResponse withPreviewUnderstandAssistantAssistantFallbackActions(openapisdk.models.shared.PreviewUnderstandAssistantAssistantFallbackActions previewUnderstandAssistantAssistantFallbackActions) {
        this.previewUnderstandAssistantAssistantFallbackActions = previewUnderstandAssistantAssistantFallbackActions;
        return this;
    }
}