package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementUnsampledReportsInsertRequest {
    public AnalyticsManagementUnsampledReportsInsertPathParams pathParams;
    public AnalyticsManagementUnsampledReportsInsertRequest withPathParams(AnalyticsManagementUnsampledReportsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementUnsampledReportsInsertQueryParams queryParams;
    public AnalyticsManagementUnsampledReportsInsertRequest withQueryParams(AnalyticsManagementUnsampledReportsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnsampledReportInput request;
    public AnalyticsManagementUnsampledReportsInsertRequest withRequest(openapisdk.models.shared.UnsampledReportInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsManagementUnsampledReportsInsertSecurity security;
    public AnalyticsManagementUnsampledReportsInsertRequest withSecurity(AnalyticsManagementUnsampledReportsInsertSecurity security) {
        this.security = security;
        return this;
    }
}