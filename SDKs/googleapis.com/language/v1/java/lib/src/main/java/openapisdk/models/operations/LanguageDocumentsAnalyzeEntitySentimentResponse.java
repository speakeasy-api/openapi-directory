package openapisdk.models.operations;



public class LanguageDocumentsAnalyzeEntitySentimentResponse {
    public openapisdk.models.shared.AnalyzeEntitySentimentResponse analyzeEntitySentimentResponse;
    public LanguageDocumentsAnalyzeEntitySentimentResponse withAnalyzeEntitySentimentResponse(openapisdk.models.shared.AnalyzeEntitySentimentResponse analyzeEntitySentimentResponse) {
        this.analyzeEntitySentimentResponse = analyzeEntitySentimentResponse;
        return this;
    }
    public String contentType;
    public LanguageDocumentsAnalyzeEntitySentimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LanguageDocumentsAnalyzeEntitySentimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}