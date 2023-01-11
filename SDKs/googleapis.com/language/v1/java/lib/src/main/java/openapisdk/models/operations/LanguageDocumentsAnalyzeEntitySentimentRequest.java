package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsAnalyzeEntitySentimentRequest {
    public LanguageDocumentsAnalyzeEntitySentimentQueryParams queryParams;
    public LanguageDocumentsAnalyzeEntitySentimentRequest withQueryParams(LanguageDocumentsAnalyzeEntitySentimentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyzeEntitySentimentRequest request;
    public LanguageDocumentsAnalyzeEntitySentimentRequest withRequest(openapisdk.models.shared.AnalyzeEntitySentimentRequest request) {
        this.request = request;
        return this;
    }
    public LanguageDocumentsAnalyzeEntitySentimentSecurity security;
    public LanguageDocumentsAnalyzeEntitySentimentRequest withSecurity(LanguageDocumentsAnalyzeEntitySentimentSecurity security) {
        this.security = security;
        return this;
    }
}