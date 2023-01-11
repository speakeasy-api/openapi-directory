package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementExperimentsInsertRequest {
    public AnalyticsManagementExperimentsInsertPathParams pathParams;
    public AnalyticsManagementExperimentsInsertRequest withPathParams(AnalyticsManagementExperimentsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementExperimentsInsertQueryParams queryParams;
    public AnalyticsManagementExperimentsInsertRequest withQueryParams(AnalyticsManagementExperimentsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Experiment request;
    public AnalyticsManagementExperimentsInsertRequest withRequest(openapisdk.models.shared.Experiment request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementExperimentsInsertSecurity security;
    public AnalyticsManagementExperimentsInsertRequest withSecurity(AnalyticsManagementExperimentsInsertSecurity security) {
        this.security = security;
        return this;
    }
}