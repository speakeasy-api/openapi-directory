package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasklistsUpdateRequest {
    public TasksTasklistsUpdatePathParams pathParams;
    public TasksTasklistsUpdateRequest withPathParams(TasksTasklistsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasklistsUpdateQueryParams queryParams;
    public TasksTasklistsUpdateRequest withQueryParams(TasksTasklistsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TaskList request;
    public TasksTasklistsUpdateRequest withRequest(openapisdk.models.shared.TaskList request) {
        this.request = request;
        return this;
    }
    public TasksTasklistsUpdateSecurity security;
    public TasksTasklistsUpdateRequest withSecurity(TasksTasklistsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}