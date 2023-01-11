package openapisdk.models.operations;



public class CreateUnderstandFieldResponse {
    public String contentType;
    public CreateUnderstandFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUnderstandFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskField previewUnderstandAssistantTaskField;
    public CreateUnderstandFieldResponse withPreviewUnderstandAssistantTaskField(openapisdk.models.shared.PreviewUnderstandAssistantTaskField previewUnderstandAssistantTaskField) {
        this.previewUnderstandAssistantTaskField = previewUnderstandAssistantTaskField;
        return this;
    }
}