package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfileFilterLinksUpdateRequest {
    public AnalyticsManagementProfileFilterLinksUpdatePathParams pathParams;
    public AnalyticsManagementProfileFilterLinksUpdateRequest withPathParams(AnalyticsManagementProfileFilterLinksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfileFilterLinksUpdateQueryParams queryParams;
    public AnalyticsManagementProfileFilterLinksUpdateRequest withQueryParams(AnalyticsManagementProfileFilterLinksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProfileFilterLinkInput request;
    public AnalyticsManagementProfileFilterLinksUpdateRequest withRequest(openapisdk.models.shared.ProfileFilterLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementProfileFilterLinksUpdateSecurity security;
    public AnalyticsManagementProfileFilterLinksUpdateRequest withSecurity(AnalyticsManagementProfileFilterLinksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}