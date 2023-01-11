package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomDimensionsUpdateRequest {
    public AnalyticsManagementCustomDimensionsUpdatePathParams pathParams;
    public AnalyticsManagementCustomDimensionsUpdateRequest withPathParams(AnalyticsManagementCustomDimensionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomDimensionsUpdateQueryParams queryParams;
    public AnalyticsManagementCustomDimensionsUpdateRequest withQueryParams(AnalyticsManagementCustomDimensionsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomDimensionInput request;
    public AnalyticsManagementCustomDimensionsUpdateRequest withRequest(openapisdk.models.shared.CustomDimensionInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementCustomDimensionsUpdateSecurity security;
    public AnalyticsManagementCustomDimensionsUpdateRequest withSecurity(AnalyticsManagementCustomDimensionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}