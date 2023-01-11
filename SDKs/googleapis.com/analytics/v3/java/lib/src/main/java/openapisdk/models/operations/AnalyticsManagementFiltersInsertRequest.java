package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementFiltersInsertRequest {
    public AnalyticsManagementFiltersInsertPathParams pathParams;
    public AnalyticsManagementFiltersInsertRequest withPathParams(AnalyticsManagementFiltersInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementFiltersInsertQueryParams queryParams;
    public AnalyticsManagementFiltersInsertRequest withQueryParams(AnalyticsManagementFiltersInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FilterInput request;
    public AnalyticsManagementFiltersInsertRequest withRequest(openapisdk.models.shared.FilterInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementFiltersInsertSecurity security;
    public AnalyticsManagementFiltersInsertRequest withSecurity(AnalyticsManagementFiltersInsertSecurity security) {
        this.security = security;
        return this;
    }
}