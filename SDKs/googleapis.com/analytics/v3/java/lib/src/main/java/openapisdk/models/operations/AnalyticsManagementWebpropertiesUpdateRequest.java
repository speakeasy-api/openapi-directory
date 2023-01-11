package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebpropertiesUpdateRequest {
    public AnalyticsManagementWebpropertiesUpdatePathParams pathParams;
    public AnalyticsManagementWebpropertiesUpdateRequest withPathParams(AnalyticsManagementWebpropertiesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebpropertiesUpdateQueryParams queryParams;
    public AnalyticsManagementWebpropertiesUpdateRequest withQueryParams(AnalyticsManagementWebpropertiesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebpropertyInput request;
    public AnalyticsManagementWebpropertiesUpdateRequest withRequest(openapisdk.models.shared.WebpropertyInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementWebpropertiesUpdateSecurity security;
    public AnalyticsManagementWebpropertiesUpdateRequest withSecurity(AnalyticsManagementWebpropertiesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}