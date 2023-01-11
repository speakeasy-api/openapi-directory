package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementFiltersUpdateRequest {
    public AnalyticsManagementFiltersUpdatePathParams pathParams;
    public AnalyticsManagementFiltersUpdateRequest withPathParams(AnalyticsManagementFiltersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementFiltersUpdateQueryParams queryParams;
    public AnalyticsManagementFiltersUpdateRequest withQueryParams(AnalyticsManagementFiltersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FilterInput request;
    public AnalyticsManagementFiltersUpdateRequest withRequest(openapisdk.models.shared.FilterInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementFiltersUpdateSecurity security;
    public AnalyticsManagementFiltersUpdateRequest withSecurity(AnalyticsManagementFiltersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}