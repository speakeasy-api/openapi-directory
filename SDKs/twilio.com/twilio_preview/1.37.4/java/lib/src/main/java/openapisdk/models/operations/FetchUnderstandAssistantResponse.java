package openapisdk.models.operations;



public class FetchUnderstandAssistantResponse {
    public String contentType;
    public FetchUnderstandAssistantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandAssistantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistant previewUnderstandAssistant;
    public FetchUnderstandAssistantResponse withPreviewUnderstandAssistant(openapisdk.models.shared.PreviewUnderstandAssistant previewUnderstandAssistant) {
        this.previewUnderstandAssistant = previewUnderstandAssistant;
        return this;
    }
}