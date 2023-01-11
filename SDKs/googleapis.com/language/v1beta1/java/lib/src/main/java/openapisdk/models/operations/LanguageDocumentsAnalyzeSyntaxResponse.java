package openapisdk.models.operations;



public class LanguageDocumentsAnalyzeSyntaxResponse {
    public openapisdk.models.shared.AnalyzeSyntaxResponse analyzeSyntaxResponse;
    public LanguageDocumentsAnalyzeSyntaxResponse withAnalyzeSyntaxResponse(openapisdk.models.shared.AnalyzeSyntaxResponse analyzeSyntaxResponse) {
        this.analyzeSyntaxResponse = analyzeSyntaxResponse;
        return this;
    }
    public String contentType;
    public LanguageDocumentsAnalyzeSyntaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LanguageDocumentsAnalyzeSyntaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}