package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingContentCategoriesUpdateRequest {
    public DfareportingContentCategoriesUpdatePathParams pathParams;
    public DfareportingContentCategoriesUpdateRequest withPathParams(DfareportingContentCategoriesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingContentCategoriesUpdateQueryParams queryParams;
    public DfareportingContentCategoriesUpdateRequest withQueryParams(DfareportingContentCategoriesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContentCategory request;
    public DfareportingContentCategoriesUpdateRequest withRequest(openapisdk.models.shared.ContentCategory request) {
        this.request = request;
        return this;
    }
    public DfareportingContentCategoriesUpdateSecurity security;
    public DfareportingContentCategoriesUpdateRequest withSecurity(DfareportingContentCategoriesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}