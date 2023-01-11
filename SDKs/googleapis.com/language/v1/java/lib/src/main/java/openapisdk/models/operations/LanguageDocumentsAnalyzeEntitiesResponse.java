package openapisdk.models.operations;



public class LanguageDocumentsAnalyzeEntitiesResponse {
    public openapisdk.models.shared.AnalyzeEntitiesResponse analyzeEntitiesResponse;
    public LanguageDocumentsAnalyzeEntitiesResponse withAnalyzeEntitiesResponse(openapisdk.models.shared.AnalyzeEntitiesResponse analyzeEntitiesResponse) {
        this.analyzeEntitiesResponse = analyzeEntitiesResponse;
        return this;
    }
    public String contentType;
    public LanguageDocumentsAnalyzeEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LanguageDocumentsAnalyzeEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}