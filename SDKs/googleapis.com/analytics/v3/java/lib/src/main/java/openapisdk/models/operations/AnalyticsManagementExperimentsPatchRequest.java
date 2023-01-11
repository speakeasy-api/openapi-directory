package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementExperimentsPatchRequest {
    public AnalyticsManagementExperimentsPatchPathParams pathParams;
    public AnalyticsManagementExperimentsPatchRequest withPathParams(AnalyticsManagementExperimentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementExperimentsPatchQueryParams queryParams;
    public AnalyticsManagementExperimentsPatchRequest withQueryParams(AnalyticsManagementExperimentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Experiment request;
    public AnalyticsManagementExperimentsPatchRequest withRequest(openapisdk.models.shared.Experiment request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementExperimentsPatchSecurity security;
    public AnalyticsManagementExperimentsPatchRequest withSecurity(AnalyticsManagementExperimentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}