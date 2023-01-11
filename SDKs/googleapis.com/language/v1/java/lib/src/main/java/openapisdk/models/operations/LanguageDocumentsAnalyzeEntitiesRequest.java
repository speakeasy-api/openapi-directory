package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsAnalyzeEntitiesRequest {
    public LanguageDocumentsAnalyzeEntitiesQueryParams queryParams;
    public LanguageDocumentsAnalyzeEntitiesRequest withQueryParams(LanguageDocumentsAnalyzeEntitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyzeEntitiesRequest request;
    public LanguageDocumentsAnalyzeEntitiesRequest withRequest(openapisdk.models.shared.AnalyzeEntitiesRequest request) {
        this.request = request;
        return this;
    }
    public LanguageDocumentsAnalyzeEntitiesSecurity security;
    public LanguageDocumentsAnalyzeEntitiesRequest withSecurity(LanguageDocumentsAnalyzeEntitiesSecurity security) {
        this.security = security;
        return this;
    }
}