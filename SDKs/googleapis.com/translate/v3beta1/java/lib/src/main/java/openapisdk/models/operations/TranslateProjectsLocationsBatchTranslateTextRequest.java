package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsBatchTranslateTextRequest {
    public TranslateProjectsLocationsBatchTranslateTextPathParams pathParams;
    public TranslateProjectsLocationsBatchTranslateTextRequest withPathParams(TranslateProjectsLocationsBatchTranslateTextPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsBatchTranslateTextQueryParams queryParams;
    public TranslateProjectsLocationsBatchTranslateTextRequest withQueryParams(TranslateProjectsLocationsBatchTranslateTextQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchTranslateTextRequest request;
    public TranslateProjectsLocationsBatchTranslateTextRequest withRequest(openapisdk.models.shared.BatchTranslateTextRequest request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsBatchTranslateTextSecurity security;
    public TranslateProjectsLocationsBatchTranslateTextRequest withSecurity(TranslateProjectsLocationsBatchTranslateTextSecurity security) {
        this.security = security;
        return this;
    }
}