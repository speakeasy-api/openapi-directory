package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebPropertyAdWordsLinksPatchRequest {
    public AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams pathParams;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchRequest withPathParams(AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebPropertyAdWordsLinksPatchQueryParams queryParams;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchRequest withQueryParams(AnalyticsManagementWebPropertyAdWordsLinksPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityAdWordsLink request;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchRequest withRequest(openapisdk.models.shared.EntityAdWordsLink request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementWebPropertyAdWordsLinksPatchSecurity security;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchRequest withSecurity(AnalyticsManagementWebPropertyAdWordsLinksPatchSecurity security) {
        this.security = security;
        return this;
    }
}