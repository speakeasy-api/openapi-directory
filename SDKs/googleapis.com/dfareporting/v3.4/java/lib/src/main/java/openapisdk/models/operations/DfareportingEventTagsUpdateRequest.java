package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingEventTagsUpdateRequest {
    public DfareportingEventTagsUpdatePathParams pathParams;
    public DfareportingEventTagsUpdateRequest withPathParams(DfareportingEventTagsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingEventTagsUpdateQueryParams queryParams;
    public DfareportingEventTagsUpdateRequest withQueryParams(DfareportingEventTagsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EventTag request;
    public DfareportingEventTagsUpdateRequest withRequest(openapisdk.models.shared.EventTag request) {
        this.request = request;
        return this;
    }
    public DfareportingEventTagsUpdateSecurity security;
    public DfareportingEventTagsUpdateRequest withSecurity(DfareportingEventTagsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}