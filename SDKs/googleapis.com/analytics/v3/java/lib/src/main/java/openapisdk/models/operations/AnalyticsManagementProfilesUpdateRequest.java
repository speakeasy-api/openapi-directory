package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfilesUpdateRequest {
    public AnalyticsManagementProfilesUpdatePathParams pathParams;
    public AnalyticsManagementProfilesUpdateRequest withPathParams(AnalyticsManagementProfilesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfilesUpdateQueryParams queryParams;
    public AnalyticsManagementProfilesUpdateRequest withQueryParams(AnalyticsManagementProfilesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProfileInput request;
    public AnalyticsManagementProfilesUpdateRequest withRequest(openapisdk.models.shared.ProfileInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementProfilesUpdateSecurity security;
    public AnalyticsManagementProfilesUpdateRequest withSecurity(AnalyticsManagementProfilesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}