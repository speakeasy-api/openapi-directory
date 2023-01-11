package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementFiltersPatchRequest {
    public AnalyticsManagementFiltersPatchPathParams pathParams;
    public AnalyticsManagementFiltersPatchRequest withPathParams(AnalyticsManagementFiltersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementFiltersPatchQueryParams queryParams;
    public AnalyticsManagementFiltersPatchRequest withQueryParams(AnalyticsManagementFiltersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FilterInput request;
    public AnalyticsManagementFiltersPatchRequest withRequest(openapisdk.models.shared.FilterInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementFiltersPatchSecurity security;
    public AnalyticsManagementFiltersPatchRequest withSecurity(AnalyticsManagementFiltersPatchSecurity security) {
        this.security = security;
        return this;
    }
}