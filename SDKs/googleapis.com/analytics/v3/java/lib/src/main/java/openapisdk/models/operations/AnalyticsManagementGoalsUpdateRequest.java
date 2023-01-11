package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementGoalsUpdateRequest {
    public AnalyticsManagementGoalsUpdatePathParams pathParams;
    public AnalyticsManagementGoalsUpdateRequest withPathParams(AnalyticsManagementGoalsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementGoalsUpdateQueryParams queryParams;
    public AnalyticsManagementGoalsUpdateRequest withQueryParams(AnalyticsManagementGoalsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Goal request;
    public AnalyticsManagementGoalsUpdateRequest withRequest(openapisdk.models.shared.Goal request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementGoalsUpdateSecurity security;
    public AnalyticsManagementGoalsUpdateRequest withSecurity(AnalyticsManagementGoalsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}