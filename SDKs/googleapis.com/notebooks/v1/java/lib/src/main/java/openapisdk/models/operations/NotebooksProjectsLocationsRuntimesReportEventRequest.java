package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesReportEventRequest {
    public NotebooksProjectsLocationsRuntimesReportEventPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesReportEventRequest withPathParams(NotebooksProjectsLocationsRuntimesReportEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesReportEventQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesReportEventRequest withQueryParams(NotebooksProjectsLocationsRuntimesReportEventQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportRuntimeEventRequest request;
    public NotebooksProjectsLocationsRuntimesReportEventRequest withRequest(openapisdk.models.shared.ReportRuntimeEventRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesReportEventSecurity security;
    public NotebooksProjectsLocationsRuntimesReportEventRequest withSecurity(NotebooksProjectsLocationsRuntimesReportEventSecurity security) {
        this.security = security;
        return this;
    }
}