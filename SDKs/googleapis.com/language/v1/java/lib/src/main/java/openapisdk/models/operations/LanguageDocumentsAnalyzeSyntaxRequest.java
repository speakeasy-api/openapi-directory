package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsAnalyzeSyntaxRequest {
    public LanguageDocumentsAnalyzeSyntaxQueryParams queryParams;
    public LanguageDocumentsAnalyzeSyntaxRequest withQueryParams(LanguageDocumentsAnalyzeSyntaxQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyzeSyntaxRequest request;
    public LanguageDocumentsAnalyzeSyntaxRequest withRequest(openapisdk.models.shared.AnalyzeSyntaxRequest request) {
        this.request = request;
        return this;
    }
    public LanguageDocumentsAnalyzeSyntaxSecurity security;
    public LanguageDocumentsAnalyzeSyntaxRequest withSecurity(LanguageDocumentsAnalyzeSyntaxSecurity security) {
        this.security = security;
        return this;
    }
}