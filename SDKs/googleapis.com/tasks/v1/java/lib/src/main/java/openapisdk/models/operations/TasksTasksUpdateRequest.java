package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksUpdateRequest {
    public TasksTasksUpdatePathParams pathParams;
    public TasksTasksUpdateRequest withPathParams(TasksTasksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasksUpdateQueryParams queryParams;
    public TasksTasksUpdateRequest withQueryParams(TasksTasksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Task request;
    public TasksTasksUpdateRequest withRequest(openapisdk.models.shared.Task request) {
        this.request = request;
        return this;
    }
    public TasksTasksUpdateSecurity security;
    public TasksTasksUpdateRequest withSecurity(TasksTasksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}