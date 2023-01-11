package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementGoalsInsertRequest {
    public AnalyticsManagementGoalsInsertPathParams pathParams;
    public AnalyticsManagementGoalsInsertRequest withPathParams(AnalyticsManagementGoalsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementGoalsInsertQueryParams queryParams;
    public AnalyticsManagementGoalsInsertRequest withQueryParams(AnalyticsManagementGoalsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Goal request;
    public AnalyticsManagementGoalsInsertRequest withRequest(openapisdk.models.shared.Goal request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementGoalsInsertSecurity security;
    public AnalyticsManagementGoalsInsertRequest withSecurity(AnalyticsManagementGoalsInsertSecurity security) {
        this.security = security;
        return this;
    }
}