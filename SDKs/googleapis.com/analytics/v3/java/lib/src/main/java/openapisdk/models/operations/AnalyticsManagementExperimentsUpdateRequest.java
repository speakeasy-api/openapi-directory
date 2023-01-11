package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementExperimentsUpdateRequest {
    public AnalyticsManagementExperimentsUpdatePathParams pathParams;
    public AnalyticsManagementExperimentsUpdateRequest withPathParams(AnalyticsManagementExperimentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementExperimentsUpdateQueryParams queryParams;
    public AnalyticsManagementExperimentsUpdateRequest withQueryParams(AnalyticsManagementExperimentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Experiment request;
    public AnalyticsManagementExperimentsUpdateRequest withRequest(openapisdk.models.shared.Experiment request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementExperimentsUpdateSecurity security;
    public AnalyticsManagementExperimentsUpdateRequest withSecurity(AnalyticsManagementExperimentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}