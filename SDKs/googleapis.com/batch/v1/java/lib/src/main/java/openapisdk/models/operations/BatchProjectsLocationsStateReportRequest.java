package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsStateReportRequest {
    public BatchProjectsLocationsStateReportPathParams pathParams;
    public BatchProjectsLocationsStateReportRequest withPathParams(BatchProjectsLocationsStateReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchProjectsLocationsStateReportQueryParams queryParams;
    public BatchProjectsLocationsStateReportRequest withQueryParams(BatchProjectsLocationsStateReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportAgentStateRequest request;
    public BatchProjectsLocationsStateReportRequest withRequest(openapisdk.models.shared.ReportAgentStateRequest request) {
        this.request = request;
        return this;
    }
    public BatchProjectsLocationsStateReportSecurity security;
    public BatchProjectsLocationsStateReportRequest withSecurity(BatchProjectsLocationsStateReportSecurity security) {
        this.security = security;
        return this;
    }
}