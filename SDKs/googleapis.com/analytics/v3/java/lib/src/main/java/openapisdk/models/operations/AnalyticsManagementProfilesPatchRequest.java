package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfilesPatchRequest {
    public AnalyticsManagementProfilesPatchPathParams pathParams;
    public AnalyticsManagementProfilesPatchRequest withPathParams(AnalyticsManagementProfilesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfilesPatchQueryParams queryParams;
    public AnalyticsManagementProfilesPatchRequest withQueryParams(AnalyticsManagementProfilesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProfileInput request;
    public AnalyticsManagementProfilesPatchRequest withRequest(openapisdk.models.shared.ProfileInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementProfilesPatchSecurity security;
    public AnalyticsManagementProfilesPatchRequest withSecurity(AnalyticsManagementProfilesPatchSecurity security) {
        this.security = security;
        return this;
    }
}