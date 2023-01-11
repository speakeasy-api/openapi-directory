package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingContentCategoriesPatchRequest {
    public DfareportingContentCategoriesPatchPathParams pathParams;
    public DfareportingContentCategoriesPatchRequest withPathParams(DfareportingContentCategoriesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingContentCategoriesPatchQueryParams queryParams;
    public DfareportingContentCategoriesPatchRequest withQueryParams(DfareportingContentCategoriesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContentCategory request;
    public DfareportingContentCategoriesPatchRequest withRequest(openapisdk.models.shared.ContentCategory request) {
        this.request = request;
        return this;
    }
    public DfareportingContentCategoriesPatchSecurity security;
    public DfareportingContentCategoriesPatchRequest withSecurity(DfareportingContentCategoriesPatchSecurity security) {
        this.security = security;
        return this;
    }
}