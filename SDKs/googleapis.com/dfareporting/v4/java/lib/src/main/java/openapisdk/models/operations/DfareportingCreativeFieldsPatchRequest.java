package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldsPatchRequest {
    public DfareportingCreativeFieldsPatchPathParams pathParams;
    public DfareportingCreativeFieldsPatchRequest withPathParams(DfareportingCreativeFieldsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCreativeFieldsPatchQueryParams queryParams;
    public DfareportingCreativeFieldsPatchRequest withQueryParams(DfareportingCreativeFieldsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeField request;
    public DfareportingCreativeFieldsPatchRequest withRequest(openapisdk.models.shared.CreativeField request) {
        this.request = request;
        return this;
    }
    public DfareportingCreativeFieldsPatchSecurity security;
    public DfareportingCreativeFieldsPatchRequest withSecurity(DfareportingCreativeFieldsPatchSecurity security) {
        this.security = security;
        return this;
    }
}