package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsreportingReportsBatchGetRequest {
    public AnalyticsreportingReportsBatchGetQueryParams queryParams;
    public AnalyticsreportingReportsBatchGetRequest withQueryParams(AnalyticsreportingReportsBatchGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetReportsRequest request;
    public AnalyticsreportingReportsBatchGetRequest withRequest(openapisdk.models.shared.GetReportsRequest request) {
        this.request = request;
        return this;
    }
    public AnalyticsreportingReportsBatchGetSecurity security;
    public AnalyticsreportingReportsBatchGetRequest withSecurity(AnalyticsreportingReportsBatchGetSecurity security) {
        this.security = security;
        return this;
    }
}