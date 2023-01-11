package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdsPatchRequest {
    public DfareportingAdsPatchPathParams pathParams;
    public DfareportingAdsPatchRequest withPathParams(DfareportingAdsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAdsPatchQueryParams queryParams;
    public DfareportingAdsPatchRequest withQueryParams(DfareportingAdsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Ad request;
    public DfareportingAdsPatchRequest withRequest(openapisdk.models.shared.Ad request) {
        this.request = request;
        return this;
    }
    public DfareportingAdsPatchSecurity security;
    public DfareportingAdsPatchRequest withSecurity(DfareportingAdsPatchSecurity security) {
        this.security = security;
        return this;
    }
}