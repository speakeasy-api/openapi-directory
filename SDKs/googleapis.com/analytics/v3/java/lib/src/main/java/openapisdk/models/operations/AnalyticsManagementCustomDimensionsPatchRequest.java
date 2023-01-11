package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomDimensionsPatchRequest {
    public AnalyticsManagementCustomDimensionsPatchPathParams pathParams;
    public AnalyticsManagementCustomDimensionsPatchRequest withPathParams(AnalyticsManagementCustomDimensionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomDimensionsPatchQueryParams queryParams;
    public AnalyticsManagementCustomDimensionsPatchRequest withQueryParams(AnalyticsManagementCustomDimensionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomDimensionInput request;
    public AnalyticsManagementCustomDimensionsPatchRequest withRequest(openapisdk.models.shared.CustomDimensionInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementCustomDimensionsPatchSecurity security;
    public AnalyticsManagementCustomDimensionsPatchRequest withSecurity(AnalyticsManagementCustomDimensionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}