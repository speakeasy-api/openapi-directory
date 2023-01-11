package openapisdk.models.operations;



public class UpdateUnderstandTaskActionsResponse {
    public String contentType;
    public UpdateUnderstandTaskActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandTaskActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskActions previewUnderstandAssistantTaskTaskActions;
    public UpdateUnderstandTaskActionsResponse withPreviewUnderstandAssistantTaskTaskActions(openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskActions previewUnderstandAssistantTaskTaskActions) {
        this.previewUnderstandAssistantTaskTaskActions = previewUnderstandAssistantTaskTaskActions;
        return this;
    }
}