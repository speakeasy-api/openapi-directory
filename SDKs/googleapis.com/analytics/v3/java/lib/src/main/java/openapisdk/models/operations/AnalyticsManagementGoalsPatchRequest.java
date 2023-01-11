package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementGoalsPatchRequest {
    public AnalyticsManagementGoalsPatchPathParams pathParams;
    public AnalyticsManagementGoalsPatchRequest withPathParams(AnalyticsManagementGoalsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementGoalsPatchQueryParams queryParams;
    public AnalyticsManagementGoalsPatchRequest withQueryParams(AnalyticsManagementGoalsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Goal request;
    public AnalyticsManagementGoalsPatchRequest withRequest(openapisdk.models.shared.Goal request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementGoalsPatchSecurity security;
    public AnalyticsManagementGoalsPatchRequest withSecurity(AnalyticsManagementGoalsPatchSecurity security) {
        this.security = security;
        return this;
    }
}