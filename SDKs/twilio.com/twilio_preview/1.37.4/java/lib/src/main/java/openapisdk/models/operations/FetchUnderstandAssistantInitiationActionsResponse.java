package openapisdk.models.operations;



public class FetchUnderstandAssistantInitiationActionsResponse {
    public String contentType;
    public FetchUnderstandAssistantInitiationActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandAssistantInitiationActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantAssistantInitiationActions previewUnderstandAssistantAssistantInitiationActions;
    public FetchUnderstandAssistantInitiationActionsResponse withPreviewUnderstandAssistantAssistantInitiationActions(openapisdk.models.shared.PreviewUnderstandAssistantAssistantInitiationActions previewUnderstandAssistantAssistantInitiationActions) {
        this.previewUnderstandAssistantAssistantInitiationActions = previewUnderstandAssistantAssistantInitiationActions;
        return this;
    }
}