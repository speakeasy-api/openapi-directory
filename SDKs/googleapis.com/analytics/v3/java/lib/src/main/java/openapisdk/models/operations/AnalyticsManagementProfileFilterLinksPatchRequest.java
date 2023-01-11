package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfileFilterLinksPatchRequest {
    public AnalyticsManagementProfileFilterLinksPatchPathParams pathParams;
    public AnalyticsManagementProfileFilterLinksPatchRequest withPathParams(AnalyticsManagementProfileFilterLinksPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfileFilterLinksPatchQueryParams queryParams;
    public AnalyticsManagementProfileFilterLinksPatchRequest withQueryParams(AnalyticsManagementProfileFilterLinksPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProfileFilterLinkInput request;
    public AnalyticsManagementProfileFilterLinksPatchRequest withRequest(openapisdk.models.shared.ProfileFilterLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementProfileFilterLinksPatchSecurity security;
    public AnalyticsManagementProfileFilterLinksPatchRequest withSecurity(AnalyticsManagementProfileFilterLinksPatchSecurity security) {
        this.security = security;
        return this;
    }
}