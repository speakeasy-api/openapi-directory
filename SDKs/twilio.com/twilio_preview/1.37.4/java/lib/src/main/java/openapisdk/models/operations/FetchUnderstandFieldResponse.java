package openapisdk.models.operations;



public class FetchUnderstandFieldResponse {
    public String contentType;
    public FetchUnderstandFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskField previewUnderstandAssistantTaskField;
    public FetchUnderstandFieldResponse withPreviewUnderstandAssistantTaskField(openapisdk.models.shared.PreviewUnderstandAssistantTaskField previewUnderstandAssistantTaskField) {
        this.previewUnderstandAssistantTaskField = previewUnderstandAssistantTaskField;
        return this;
    }
}