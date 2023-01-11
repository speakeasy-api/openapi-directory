package openapisdk.models.operations;



public class UpdateUnderstandFieldTypeResponse {
    public String contentType;
    public UpdateUnderstandFieldTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandFieldTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantFieldType previewUnderstandAssistantFieldType;
    public UpdateUnderstandFieldTypeResponse withPreviewUnderstandAssistantFieldType(openapisdk.models.shared.PreviewUnderstandAssistantFieldType previewUnderstandAssistantFieldType) {
        this.previewUnderstandAssistantFieldType = previewUnderstandAssistantFieldType;
        return this;
    }
}