package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsSchedulesCreateRequest {
    public NotebooksProjectsLocationsSchedulesCreatePathParams pathParams;
    public NotebooksProjectsLocationsSchedulesCreateRequest withPathParams(NotebooksProjectsLocationsSchedulesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsSchedulesCreateQueryParams queryParams;
    public NotebooksProjectsLocationsSchedulesCreateRequest withQueryParams(NotebooksProjectsLocationsSchedulesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScheduleInput request;
    public NotebooksProjectsLocationsSchedulesCreateRequest withRequest(openapisdk.models.shared.ScheduleInput request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsSchedulesCreateSecurity security;
    public NotebooksProjectsLocationsSchedulesCreateRequest withSecurity(NotebooksProjectsLocationsSchedulesCreateSecurity security) {
        this.security = security;
        return this;
    }
}