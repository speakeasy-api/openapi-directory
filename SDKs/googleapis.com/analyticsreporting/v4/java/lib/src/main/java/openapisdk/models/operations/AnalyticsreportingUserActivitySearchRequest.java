package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsreportingUserActivitySearchRequest {
    public AnalyticsreportingUserActivitySearchQueryParams queryParams;
    public AnalyticsreportingUserActivitySearchRequest withQueryParams(AnalyticsreportingUserActivitySearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchUserActivityRequest request;
    public AnalyticsreportingUserActivitySearchRequest withRequest(openapisdk.models.shared.SearchUserActivityRequest request) {
        this.request = request;
        return this;
    }
    public AnalyticsreportingUserActivitySearchSecurity security;
    public AnalyticsreportingUserActivitySearchRequest withSecurity(AnalyticsreportingUserActivitySearchSecurity security) {
        this.security = security;
        return this;
    }
}