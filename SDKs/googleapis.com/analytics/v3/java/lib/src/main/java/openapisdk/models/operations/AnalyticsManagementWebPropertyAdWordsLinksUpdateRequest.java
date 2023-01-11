package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest {
    public AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams pathParams;
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest withPathParams(AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams queryParams;
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest withQueryParams(AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityAdWordsLink request;
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest withRequest(openapisdk.models.shared.EntityAdWordsLink request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity security;
    public AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest withSecurity(AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}