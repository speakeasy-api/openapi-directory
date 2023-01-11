package openapisdk.models.operations;



public class FetchUnderstandStyleSheetResponse {
    public String contentType;
    public FetchUnderstandStyleSheetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandStyleSheetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantStyleSheet previewUnderstandAssistantStyleSheet;
    public FetchUnderstandStyleSheetResponse withPreviewUnderstandAssistantStyleSheet(openapisdk.models.shared.PreviewUnderstandAssistantStyleSheet previewUnderstandAssistantStyleSheet) {
        this.previewUnderstandAssistantStyleSheet = previewUnderstandAssistantStyleSheet;
        return this;
    }
}