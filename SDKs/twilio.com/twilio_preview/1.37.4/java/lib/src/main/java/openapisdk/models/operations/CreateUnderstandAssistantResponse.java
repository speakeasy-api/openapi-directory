package openapisdk.models.operations;



public class CreateUnderstandAssistantResponse {
    public String contentType;
    public CreateUnderstandAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUnderstandAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistant previewUnderstandAssistant;
    public CreateUnderstandAssistantResponse withPreviewUnderstandAssistant(openapisdk.models.shared.PreviewUnderstandAssistant previewUnderstandAssistant) {
        this.previewUnderstandAssistant = previewUnderstandAssistant;
        return this;
    }
}