package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebpropertyUserLinksUpdateRequest {
    public AnalyticsManagementWebpropertyUserLinksUpdatePathParams pathParams;
    public AnalyticsManagementWebpropertyUserLinksUpdateRequest withPathParams(AnalyticsManagementWebpropertyUserLinksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebpropertyUserLinksUpdateQueryParams queryParams;
    public AnalyticsManagementWebpropertyUserLinksUpdateRequest withQueryParams(AnalyticsManagementWebpropertyUserLinksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityUserLinkInput request;
    public AnalyticsManagementWebpropertyUserLinksUpdateRequest withRequest(openapisdk.models.shared.EntityUserLinkInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementWebpropertyUserLinksUpdateSecurity security;
    public AnalyticsManagementWebpropertyUserLinksUpdateRequest withSecurity(AnalyticsManagementWebpropertyUserLinksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}