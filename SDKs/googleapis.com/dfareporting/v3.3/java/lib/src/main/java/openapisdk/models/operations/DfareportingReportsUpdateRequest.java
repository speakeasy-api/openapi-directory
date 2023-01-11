package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingReportsUpdateRequest {
    public DfareportingReportsUpdatePathParams pathParams;
    public DfareportingReportsUpdateRequest withPathParams(DfareportingReportsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingReportsUpdateQueryParams queryParams;
    public DfareportingReportsUpdateRequest withQueryParams(DfareportingReportsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Report request;
    public DfareportingReportsUpdateRequest withRequest(openapisdk.models.shared.Report request) {
        this.request = request;
        return this;
    }
    public DfareportingReportsUpdateSecurity security;
    public DfareportingReportsUpdateRequest withSecurity(DfareportingReportsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}