package openapisdk.models.operations;



public class FetchUnderstandTaskActionsResponse {
    public String contentType;
    public FetchUnderstandTaskActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandTaskActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskActions previewUnderstandAssistantTaskTaskActions;
    public FetchUnderstandTaskActionsResponse withPreviewUnderstandAssistantTaskTaskActions(openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskActions previewUnderstandAssistantTaskTaskActions) {
        this.previewUnderstandAssistantTaskTaskActions = previewUnderstandAssistantTaskTaskActions;
        return this;
    }
}