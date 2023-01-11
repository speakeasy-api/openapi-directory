package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsAnalyzeSentimentRequest {
    public LanguageDocumentsAnalyzeSentimentQueryParams queryParams;
    public LanguageDocumentsAnalyzeSentimentRequest withQueryParams(LanguageDocumentsAnalyzeSentimentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyzeSentimentRequest request;
    public LanguageDocumentsAnalyzeSentimentRequest withRequest(openapisdk.models.shared.AnalyzeSentimentRequest request) {
        this.request = request;
        return this;
    }
    public LanguageDocumentsAnalyzeSentimentSecurity security;
    public LanguageDocumentsAnalyzeSentimentRequest withSecurity(LanguageDocumentsAnalyzeSentimentSecurity security) {
        this.security = security;
        return this;
    }
}