package openapisdk.models.operations;



public class FetchUnderstandTaskResponse {
    public String contentType;
    public FetchUnderstandTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTask previewUnderstandAssistantTask;
    public FetchUnderstandTaskResponse withPreviewUnderstandAssistantTask(openapisdk.models.shared.PreviewUnderstandAssistantTask previewUnderstandAssistantTask) {
        this.previewUnderstandAssistantTask = previewUnderstandAssistantTask;
        return this;
    }
}