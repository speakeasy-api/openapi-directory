package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsSchedulesTriggerRequest {
    public NotebooksProjectsLocationsSchedulesTriggerPathParams pathParams;
    public NotebooksProjectsLocationsSchedulesTriggerRequest withPathParams(NotebooksProjectsLocationsSchedulesTriggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsSchedulesTriggerQueryParams queryParams;
    public NotebooksProjectsLocationsSchedulesTriggerRequest withQueryParams(NotebooksProjectsLocationsSchedulesTriggerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public NotebooksProjectsLocationsSchedulesTriggerRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsSchedulesTriggerSecurity security;
    public NotebooksProjectsLocationsSchedulesTriggerRequest withSecurity(NotebooksProjectsLocationsSchedulesTriggerSecurity security) {
        this.security = security;
        return this;
    }
}