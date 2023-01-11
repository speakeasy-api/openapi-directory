package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingEventTagsInsertRequest {
    public DfareportingEventTagsInsertPathParams pathParams;
    public DfareportingEventTagsInsertRequest withPathParams(DfareportingEventTagsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingEventTagsInsertQueryParams queryParams;
    public DfareportingEventTagsInsertRequest withQueryParams(DfareportingEventTagsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EventTag request;
    public DfareportingEventTagsInsertRequest withRequest(openapisdk.models.shared.EventTag request) {
        this.request = request;
        return this;
    }
    public DfareportingEventTagsInsertSecurity security;
    public DfareportingEventTagsInsertRequest withSecurity(DfareportingEventTagsInsertSecurity security) {
        this.security = security;
        return this;
    }
}