package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsTranslateDocumentRequest {
    public TranslateProjectsLocationsTranslateDocumentPathParams pathParams;
    public TranslateProjectsLocationsTranslateDocumentRequest withPathParams(TranslateProjectsLocationsTranslateDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsTranslateDocumentQueryParams queryParams;
    public TranslateProjectsLocationsTranslateDocumentRequest withQueryParams(TranslateProjectsLocationsTranslateDocumentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TranslateDocumentRequest request;
    public TranslateProjectsLocationsTranslateDocumentRequest withRequest(openapisdk.models.shared.TranslateDocumentRequest request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsTranslateDocumentSecurity security;
    public TranslateProjectsLocationsTranslateDocumentRequest withSecurity(TranslateProjectsLocationsTranslateDocumentSecurity security) {
        this.security = security;
        return this;
    }
}