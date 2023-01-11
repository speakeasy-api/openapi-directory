package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebpropertiesInsertRequest {
    public AnalyticsManagementWebpropertiesInsertPathParams pathParams;
    public AnalyticsManagementWebpropertiesInsertRequest withPathParams(AnalyticsManagementWebpropertiesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementWebpropertiesInsertQueryParams queryParams;
    public AnalyticsManagementWebpropertiesInsertRequest withQueryParams(AnalyticsManagementWebpropertiesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebpropertyInput request;
    public AnalyticsManagementWebpropertiesInsertRequest withRequest(openapisdk.models.shared.WebpropertyInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementWebpropertiesInsertSecurity security;
    public AnalyticsManagementWebpropertiesInsertRequest withSecurity(AnalyticsManagementWebpropertiesInsertSecurity security) {
        this.security = security;
        return this;
    }
}