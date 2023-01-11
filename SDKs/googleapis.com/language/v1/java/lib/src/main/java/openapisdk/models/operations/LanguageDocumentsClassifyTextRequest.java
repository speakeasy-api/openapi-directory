package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsClassifyTextRequest {
    public LanguageDocumentsClassifyTextQueryParams queryParams;
    public LanguageDocumentsClassifyTextRequest withQueryParams(LanguageDocumentsClassifyTextQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClassifyTextRequest request;
    public LanguageDocumentsClassifyTextRequest withRequest(openapisdk.models.shared.ClassifyTextRequest request) {
        this.request = request;
        return this;
    }
    public LanguageDocumentsClassifyTextSecurity security;
    public LanguageDocumentsClassifyTextRequest withSecurity(LanguageDocumentsClassifyTextSecurity security) {
        this.security = security;
        return this;
    }
}