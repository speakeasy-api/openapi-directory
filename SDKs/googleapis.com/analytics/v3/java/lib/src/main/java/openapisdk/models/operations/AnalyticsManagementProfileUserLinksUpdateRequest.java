package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfileUserLinksUpdateRequest {
    public AnalyticsManagementProfileUserLinksUpdatePathParams pathParams;
    public AnalyticsManagementProfileUserLinksUpdateRequest withPathParams(AnalyticsManagementProfileUserLinksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfileUserLinksUpdateQueryParams queryParams;
    public AnalyticsManagementProfileUserLinksUpdateRequest withQueryParams(AnalyticsManagementProfileUserLinksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityUserLinkInput request;
    public AnalyticsManagementProfileUserLinksUpdateRequest withRequest(openapisdk.models.shared.EntityUserLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementProfileUserLinksUpdateSecurity security;
    public AnalyticsManagementProfileUserLinksUpdateRequest withSecurity(AnalyticsManagementProfileUserLinksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}