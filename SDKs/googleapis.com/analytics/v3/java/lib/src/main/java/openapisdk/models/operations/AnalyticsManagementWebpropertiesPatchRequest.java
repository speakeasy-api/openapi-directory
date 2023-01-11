package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebpropertiesPatchRequest {
    public AnalyticsManagementWebpropertiesPatchPathParams pathParams;
    public AnalyticsManagementWebpropertiesPatchRequest withPathParams(AnalyticsManagementWebpropertiesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebpropertiesPatchQueryParams queryParams;
    public AnalyticsManagementWebpropertiesPatchRequest withQueryParams(AnalyticsManagementWebpropertiesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebpropertyInput request;
    public AnalyticsManagementWebpropertiesPatchRequest withRequest(openapisdk.models.shared.WebpropertyInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementWebpropertiesPatchSecurity security;
    public AnalyticsManagementWebpropertiesPatchRequest withSecurity(AnalyticsManagementWebpropertiesPatchSecurity security) {
        this.security = security;
        return this;
    }
}