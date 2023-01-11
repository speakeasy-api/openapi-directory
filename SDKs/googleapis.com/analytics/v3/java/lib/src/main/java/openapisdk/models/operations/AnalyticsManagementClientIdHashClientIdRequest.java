package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementClientIdHashClientIdRequest {
    public AnalyticsManagementClientIdHashClientIdQueryParams queryParams;
    public AnalyticsManagementClientIdHashClientIdRequest withQueryParams(AnalyticsManagementClientIdHashClientIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HashClientIdRequest request;
    public AnalyticsManagementClientIdHashClientIdRequest withRequest(openapisdk.models.shared.HashClientIdRequest request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementClientIdHashClientIdSecurity security;
    public AnalyticsManagementClientIdHashClientIdRequest withSecurity(AnalyticsManagementClientIdHashClientIdSecurity security) {
        this.security = security;
        return this;
    }
}