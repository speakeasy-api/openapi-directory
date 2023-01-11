package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsLocalPostsReportInsightsRequest {
    public MybusinessAccountsLocationsLocalPostsReportInsightsPathParams pathParams;
    public MybusinessAccountsLocationsLocalPostsReportInsightsRequest withPathParams(MybusinessAccountsLocationsLocalPostsReportInsightsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams queryParams;
    public MybusinessAccountsLocationsLocalPostsReportInsightsRequest withQueryParams(MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportLocalPostInsightsRequest request;
    public MybusinessAccountsLocationsLocalPostsReportInsightsRequest withRequest(openapisdk.models.shared.ReportLocalPostInsightsRequest request) {
        this.request = request;
        return this;
    }
}