package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingReportsInsertRequest {
    public DfareportingReportsInsertPathParams pathParams;
    public DfareportingReportsInsertRequest withPathParams(DfareportingReportsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingReportsInsertQueryParams queryParams;
    public DfareportingReportsInsertRequest withQueryParams(DfareportingReportsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Report request;
    public DfareportingReportsInsertRequest withRequest(openapisdk.models.shared.Report request) {
        this.request = request;
        return this;
    }
    public DfareportingReportsInsertSecurity security;
    public DfareportingReportsInsertRequest withSecurity(DfareportingReportsInsertSecurity security) {
        this.security = security;
        return this;
    }
}