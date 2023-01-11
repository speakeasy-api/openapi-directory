package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesReportRequest {
    public NotebooksProjectsLocationsInstancesReportPathParams pathParams;
    public NotebooksProjectsLocationsInstancesReportRequest withPathParams(NotebooksProjectsLocationsInstancesReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesReportQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesReportRequest withQueryParams(NotebooksProjectsLocationsInstancesReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportInstanceInfoRequest request;
    public NotebooksProjectsLocationsInstancesReportRequest withRequest(openapisdk.models.shared.ReportInstanceInfoRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesReportSecurity security;
    public NotebooksProjectsLocationsInstancesReportRequest withSecurity(NotebooksProjectsLocationsInstancesReportSecurity security) {
        this.security = security;
        return this;
    }
}