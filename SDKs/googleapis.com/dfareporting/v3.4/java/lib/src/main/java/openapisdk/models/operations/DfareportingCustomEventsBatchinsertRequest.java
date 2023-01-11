package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCustomEventsBatchinsertRequest {
    public DfareportingCustomEventsBatchinsertPathParams pathParams;
    public DfareportingCustomEventsBatchinsertRequest withPathParams(DfareportingCustomEventsBatchinsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingCustomEventsBatchinsertQueryParams queryParams;
    public DfareportingCustomEventsBatchinsertRequest withQueryParams(DfareportingCustomEventsBatchinsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomEventsBatchInsertRequest request;
    public DfareportingCustomEventsBatchinsertRequest withRequest(openapisdk.models.shared.CustomEventsBatchInsertRequest request) {
        this.request = request;
        return this;
    }
    public DfareportingCustomEventsBatchinsertSecurity security;
    public DfareportingCustomEventsBatchinsertRequest withSecurity(DfareportingCustomEventsBatchinsertSecurity security) {
        this.security = security;
        return this;
    }
}