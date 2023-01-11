package openapisdk.models.operations;



public class FetchUnderstandFieldValueResponse {
    public String contentType;
    public FetchUnderstandFieldValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandFieldValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue previewUnderstandAssistantFieldTypeFieldValue;
    public FetchUnderstandFieldValueResponse withPreviewUnderstandAssistantFieldTypeFieldValue(openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue previewUnderstandAssistantFieldTypeFieldValue) {
        this.previewUnderstandAssistantFieldTypeFieldValue = previewUnderstandAssistantFieldTypeFieldValue;
        return this;
    }
}