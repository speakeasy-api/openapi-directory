package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessGoogleLocationsReportRequest {
    public MybusinessGoogleLocationsReportPathParams pathParams;
    public MybusinessGoogleLocationsReportRequest withPathParams(MybusinessGoogleLocationsReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessGoogleLocationsReportQueryParams queryParams;
    public MybusinessGoogleLocationsReportRequest withQueryParams(MybusinessGoogleLocationsReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportGoogleLocationRequest request;
    public MybusinessGoogleLocationsReportRequest withRequest(openapisdk.models.shared.ReportGoogleLocationRequest request) {
        this.request = request;
        return this;
    }
}