package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingReportsCompatibleFieldsQueryRequest {
    public DfareportingReportsCompatibleFieldsQueryPathParams pathParams;
    public DfareportingReportsCompatibleFieldsQueryRequest withPathParams(DfareportingReportsCompatibleFieldsQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingReportsCompatibleFieldsQueryQueryParams queryParams;
    public DfareportingReportsCompatibleFieldsQueryRequest withQueryParams(DfareportingReportsCompatibleFieldsQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Report request;
    public DfareportingReportsCompatibleFieldsQueryRequest withRequest(openapisdk.models.shared.Report request) {
        this.request = request;
        return this;
    }
    public DfareportingReportsCompatibleFieldsQuerySecurity security;
    public DfareportingReportsCompatibleFieldsQueryRequest withSecurity(DfareportingReportsCompatibleFieldsQuerySecurity security) {
        this.security = security;
        return this;
    }
}