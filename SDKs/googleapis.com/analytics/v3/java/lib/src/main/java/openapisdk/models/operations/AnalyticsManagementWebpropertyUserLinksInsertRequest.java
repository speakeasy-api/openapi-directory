package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebpropertyUserLinksInsertRequest {
    public AnalyticsManagementWebpropertyUserLinksInsertPathParams pathParams;
    public AnalyticsManagementWebpropertyUserLinksInsertRequest withPathParams(AnalyticsManagementWebpropertyUserLinksInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebpropertyUserLinksInsertQueryParams queryParams;
    public AnalyticsManagementWebpropertyUserLinksInsertRequest withQueryParams(AnalyticsManagementWebpropertyUserLinksInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityUserLinkInput request;
    public AnalyticsManagementWebpropertyUserLinksInsertRequest withRequest(openapisdk.models.shared.EntityUserLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementWebpropertyUserLinksInsertSecurity security;
    public AnalyticsManagementWebpropertyUserLinksInsertRequest withSecurity(AnalyticsManagementWebpropertyUserLinksInsertSecurity security) {
        this.security = security;
        return this;
    }
}