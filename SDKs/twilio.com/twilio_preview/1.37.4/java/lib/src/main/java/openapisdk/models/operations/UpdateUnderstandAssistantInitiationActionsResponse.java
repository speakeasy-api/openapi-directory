package openapisdk.models.operations;



public class UpdateUnderstandAssistantInitiationActionsResponse {
    public String contentType;
    public UpdateUnderstandAssistantInitiationActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandAssistantInitiationActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantAssistantInitiationActions previewUnderstandAssistantAssistantInitiationActions;
    public UpdateUnderstandAssistantInitiationActionsResponse withPreviewUnderstandAssistantAssistantInitiationActions(openapisdk.models.shared.PreviewUnderstandAssistantAssistantInitiationActions previewUnderstandAssistantAssistantInitiationActions) {
        this.previewUnderstandAssistantAssistantInitiationActions = previewUnderstandAssistantAssistantInitiationActions;
        return this;
    }
}