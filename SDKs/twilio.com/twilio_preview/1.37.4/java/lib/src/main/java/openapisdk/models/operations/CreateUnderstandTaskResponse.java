package openapisdk.models.operations;



public class CreateUnderstandTaskResponse {
    public String contentType;
    public CreateUnderstandTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUnderstandTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTask previewUnderstandAssistantTask;
    public CreateUnderstandTaskResponse withPreviewUnderstandAssistantTask(openapisdk.models.shared.PreviewUnderstandAssistantTask previewUnderstandAssistantTask) {
        this.previewUnderstandAssistantTask = previewUnderstandAssistantTask;
        return this;
    }
}