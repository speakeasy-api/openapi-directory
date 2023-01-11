package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountsPatchRequest {
    public DfareportingAccountsPatchPathParams pathParams;
    public DfareportingAccountsPatchRequest withPathParams(DfareportingAccountsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountsPatchQueryParams queryParams;
    public DfareportingAccountsPatchRequest withQueryParams(DfareportingAccountsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Account request;
    public DfareportingAccountsPatchRequest withRequest(openapisdk.models.shared.Account request) {
        this.request = request;
        return this;
    }
    public DfareportingAccountsPatchSecurity security;
    public DfareportingAccountsPatchRequest withSecurity(DfareportingAccountsPatchSecurity security) {
        this.security = security;
        return this;
    }
}