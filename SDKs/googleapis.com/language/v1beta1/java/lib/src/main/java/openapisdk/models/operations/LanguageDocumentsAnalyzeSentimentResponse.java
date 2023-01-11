package openapisdk.models.operations;



public class LanguageDocumentsAnalyzeSentimentResponse {
    public openapisdk.models.shared.AnalyzeSentimentResponse analyzeSentimentResponse;
    public LanguageDocumentsAnalyzeSentimentResponse withAnalyzeSentimentResponse(openapisdk.models.shared.AnalyzeSentimentResponse analyzeSentimentResponse) {
        this.analyzeSentimentResponse = analyzeSentimentResponse;
        return this;
    }
    public String contentType;
    public LanguageDocumentsAnalyzeSentimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LanguageDocumentsAnalyzeSentimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}