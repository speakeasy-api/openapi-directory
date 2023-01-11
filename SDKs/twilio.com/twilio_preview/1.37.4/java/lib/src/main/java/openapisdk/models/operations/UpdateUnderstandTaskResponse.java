package openapisdk.models.operations;



public class UpdateUnderstandTaskResponse {
    public String contentType;
    public UpdateUnderstandTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTask previewUnderstandAssistantTask;
    public UpdateUnderstandTaskResponse withPreviewUnderstandAssistantTask(openapisdk.models.shared.PreviewUnderstandAssistantTask previewUnderstandAssistantTask) {
        this.previewUnderstandAssistantTask = previewUnderstandAssistantTask;
        return this;
    }
}