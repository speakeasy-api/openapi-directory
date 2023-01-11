package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsAnnotateTextRequest {
    public LanguageDocumentsAnnotateTextQueryParams queryParams;
    public LanguageDocumentsAnnotateTextRequest withQueryParams(LanguageDocumentsAnnotateTextQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnnotateTextRequest request;
    public LanguageDocumentsAnnotateTextRequest withRequest(openapisdk.models.shared.AnnotateTextRequest request) {
        this.request = request;
        return this;
    }
    public LanguageDocumentsAnnotateTextSecurity security;
    public LanguageDocumentsAnnotateTextRequest withSecurity(LanguageDocumentsAnnotateTextSecurity security) {
        this.security = security;
        return this;
    }
}