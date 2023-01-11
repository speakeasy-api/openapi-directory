package openapisdk.models.operations;



public class FetchUnderstandFieldTypeResponse {
    public String contentType;
    public FetchUnderstandFieldTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandFieldTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantFieldType previewUnderstandAssistantFieldType;
    public FetchUnderstandFieldTypeResponse withPreviewUnderstandAssistantFieldType(openapisdk.models.shared.PreviewUnderstandAssistantFieldType previewUnderstandAssistantFieldType) {
        this.previewUnderstandAssistantFieldType = previewUnderstandAssistantFieldType;
        return this;
    }
}