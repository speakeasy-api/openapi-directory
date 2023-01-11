package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfileUserLinksInsertRequest {
    public AnalyticsManagementProfileUserLinksInsertPathParams pathParams;
    public AnalyticsManagementProfileUserLinksInsertRequest withPathParams(AnalyticsManagementProfileUserLinksInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfileUserLinksInsertQueryParams queryParams;
    public AnalyticsManagementProfileUserLinksInsertRequest withQueryParams(AnalyticsManagementProfileUserLinksInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityUserLinkInput request;
    public AnalyticsManagementProfileUserLinksInsertRequest withRequest(openapisdk.models.shared.EntityUserLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementProfileUserLinksInsertSecurity security;
    public AnalyticsManagementProfileUserLinksInsertRequest withSecurity(AnalyticsManagementProfileUserLinksInsertSecurity security) {
        this.security = security;
        return this;
    }
}