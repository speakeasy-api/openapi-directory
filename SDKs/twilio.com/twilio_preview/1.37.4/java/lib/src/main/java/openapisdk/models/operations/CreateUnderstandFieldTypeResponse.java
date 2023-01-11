package openapisdk.models.operations;



public class CreateUnderstandFieldTypeResponse {
    public String contentType;
    public CreateUnderstandFieldTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUnderstandFieldTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantFieldType previewUnderstandAssistantFieldType;
    public CreateUnderstandFieldTypeResponse withPreviewUnderstandAssistantFieldType(openapisdk.models.shared.PreviewUnderstandAssistantFieldType previewUnderstandAssistantFieldType) {
        this.previewUnderstandAssistantFieldType = previewUnderstandAssistantFieldType;
        return this;
    }
}