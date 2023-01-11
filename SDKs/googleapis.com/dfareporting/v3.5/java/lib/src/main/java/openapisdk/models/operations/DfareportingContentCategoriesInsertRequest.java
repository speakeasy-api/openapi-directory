package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingContentCategoriesInsertRequest {
    public DfareportingContentCategoriesInsertPathParams pathParams;
    public DfareportingContentCategoriesInsertRequest withPathParams(DfareportingContentCategoriesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingContentCategoriesInsertQueryParams queryParams;
    public DfareportingContentCategoriesInsertRequest withQueryParams(DfareportingContentCategoriesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContentCategory request;
    public DfareportingContentCategoriesInsertRequest withRequest(openapisdk.models.shared.ContentCategory request) {
        this.request = request;
        return this;
    }
    public DfareportingContentCategoriesInsertSecurity security;
    public DfareportingContentCategoriesInsertRequest withSecurity(DfareportingContentCategoriesInsertSecurity security) {
        this.security = security;
        return this;
    }
}