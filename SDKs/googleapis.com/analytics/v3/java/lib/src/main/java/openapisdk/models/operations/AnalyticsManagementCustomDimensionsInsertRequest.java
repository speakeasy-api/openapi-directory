package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomDimensionsInsertRequest {
    public AnalyticsManagementCustomDimensionsInsertPathParams pathParams;
    public AnalyticsManagementCustomDimensionsInsertRequest withPathParams(AnalyticsManagementCustomDimensionsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementCustomDimensionsInsertQueryParams queryParams;
    public AnalyticsManagementCustomDimensionsInsertRequest withQueryParams(AnalyticsManagementCustomDimensionsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomDimensionInput request;
    public AnalyticsManagementCustomDimensionsInsertRequest withRequest(openapisdk.models.shared.CustomDimensionInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementCustomDimensionsInsertSecurity security;
    public AnalyticsManagementCustomDimensionsInsertRequest withSecurity(AnalyticsManagementCustomDimensionsInsertSecurity security) {
        this.security = security;
        return this;
    }
}