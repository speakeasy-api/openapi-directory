package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementAccountUserLinksInsertRequest {
    public AnalyticsManagementAccountUserLinksInsertPathParams pathParams;
    public AnalyticsManagementAccountUserLinksInsertRequest withPathParams(AnalyticsManagementAccountUserLinksInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementAccountUserLinksInsertQueryParams queryParams;
    public AnalyticsManagementAccountUserLinksInsertRequest withQueryParams(AnalyticsManagementAccountUserLinksInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityUserLinkInput request;
    public AnalyticsManagementAccountUserLinksInsertRequest withRequest(openapisdk.models.shared.EntityUserLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementAccountUserLinksInsertSecurity security;
    public AnalyticsManagementAccountUserLinksInsertRequest withSecurity(AnalyticsManagementAccountUserLinksInsertSecurity security) {
        this.security = security;
        return this;
    }
}