package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfilesInsertRequest {
    public AnalyticsManagementProfilesInsertPathParams pathParams;
    public AnalyticsManagementProfilesInsertRequest withPathParams(AnalyticsManagementProfilesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfilesInsertQueryParams queryParams;
    public AnalyticsManagementProfilesInsertRequest withQueryParams(AnalyticsManagementProfilesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProfileInput request;
    public AnalyticsManagementProfilesInsertRequest withRequest(openapisdk.models.shared.ProfileInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementProfilesInsertSecurity security;
    public AnalyticsManagementProfilesInsertRequest withSecurity(AnalyticsManagementProfilesInsertSecurity security) {
        this.security = security;
        return this;
    }
}