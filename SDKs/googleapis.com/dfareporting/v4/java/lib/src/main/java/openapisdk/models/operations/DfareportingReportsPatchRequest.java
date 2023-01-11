package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingReportsPatchRequest {
    public DfareportingReportsPatchPathParams pathParams;
    public DfareportingReportsPatchRequest withPathParams(DfareportingReportsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingReportsPatchQueryParams queryParams;
    public DfareportingReportsPatchRequest withQueryParams(DfareportingReportsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Report request;
    public DfareportingReportsPatchRequest withRequest(openapisdk.models.shared.Report request) {
        this.request = request;
        return this;
    }
    public DfareportingReportsPatchSecurity security;
    public DfareportingReportsPatchRequest withSecurity(DfareportingReportsPatchSecurity security) {
        this.security = security;
        return this;
    }
}