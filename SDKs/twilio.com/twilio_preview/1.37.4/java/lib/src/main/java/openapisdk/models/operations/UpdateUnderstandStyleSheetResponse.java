package openapisdk.models.operations;



public class UpdateUnderstandStyleSheetResponse {
    public String contentType;
    public UpdateUnderstandStyleSheetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUnderstandStyleSheetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantStyleSheet previewUnderstandAssistantStyleSheet;
    public UpdateUnderstandStyleSheetResponse withPreviewUnderstandAssistantStyleSheet(openapisdk.models.shared.PreviewUnderstandAssistantStyleSheet previewUnderstandAssistantStyleSheet) {
        this.previewUnderstandAssistantStyleSheet = previewUnderstandAssistantStyleSheet;
        return this;
    }
}