package openapisdk.models.operations;



public class CreateUnderstandFieldValueResponse {
    public String contentType;
    public CreateUnderstandFieldValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUnderstandFieldValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue previewUnderstandAssistantFieldTypeFieldValue;
    public CreateUnderstandFieldValueResponse withPreviewUnderstandAssistantFieldTypeFieldValue(openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue previewUnderstandAssistantFieldTypeFieldValue) {
        this.previewUnderstandAssistantFieldTypeFieldValue = previewUnderstandAssistantFieldTypeFieldValue;
        return this;
    }
}