package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsReportInsightsRequest {
    public MybusinessAccountsLocationsReportInsightsPathParams pathParams;
    public MybusinessAccountsLocationsReportInsightsRequest withPathParams(MybusinessAccountsLocationsReportInsightsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsLocationsReportInsightsQueryParams queryParams;
    public MybusinessAccountsLocationsReportInsightsRequest withQueryParams(MybusinessAccountsLocationsReportInsightsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportLocationInsightsRequest request;
    public MybusinessAccountsLocationsReportInsightsRequest withRequest(openapisdk.models.shared.ReportLocationInsightsRequest request) {
        this.request = request;
        return this;
    }
}