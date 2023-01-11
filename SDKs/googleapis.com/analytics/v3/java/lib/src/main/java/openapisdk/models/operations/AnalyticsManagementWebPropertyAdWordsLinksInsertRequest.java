package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebPropertyAdWordsLinksInsertRequest {
    public AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams pathParams;
    public AnalyticsManagementWebPropertyAdWordsLinksInsertRequest withPathParams(AnalyticsManagementWebPropertyAdWordsLinksInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams queryParams;
    public AnalyticsManagementWebPropertyAdWordsLinksInsertRequest withQueryParams(AnalyticsManagementWebPropertyAdWordsLinksInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityAdWordsLink request;
    public AnalyticsManagementWebPropertyAdWordsLinksInsertRequest withRequest(openapisdk.models.shared.EntityAdWordsLink request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity security;
    public AnalyticsManagementWebPropertyAdWordsLinksInsertRequest withSecurity(AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity security) {
        this.security = security;
        return this;
    }
}