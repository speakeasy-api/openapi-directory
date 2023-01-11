package openapisdk.models.operations;



public class UpdateUnderstandAssistantResponse {
    public String contentType;
    public UpdateUnderstandAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistant previewUnderstandAssistant;
    public UpdateUnderstandAssistantResponse withPreviewUnderstandAssistant(openapisdk.models.shared.PreviewUnderstandAssistant previewUnderstandAssistant) {
        this.previewUnderstandAssistant = previewUnderstandAssistant;
        return this;
    }
}