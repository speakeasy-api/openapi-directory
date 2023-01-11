package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementAccountUserLinksUpdateRequest {
    public AnalyticsManagementAccountUserLinksUpdatePathParams pathParams;
    public AnalyticsManagementAccountUserLinksUpdateRequest withPathParams(AnalyticsManagementAccountUserLinksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementAccountUserLinksUpdateQueryParams queryParams;
    public AnalyticsManagementAccountUserLinksUpdateRequest withQueryParams(AnalyticsManagementAccountUserLinksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityUserLinkInput request;
    public AnalyticsManagementAccountUserLinksUpdateRequest withRequest(openapisdk.models.shared.EntityUserLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementAccountUserLinksUpdateSecurity security;
    public AnalyticsManagementAccountUserLinksUpdateRequest withSecurity(AnalyticsManagementAccountUserLinksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}