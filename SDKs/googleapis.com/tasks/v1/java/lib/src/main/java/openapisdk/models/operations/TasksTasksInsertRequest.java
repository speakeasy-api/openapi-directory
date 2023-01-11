package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksInsertRequest {
    public TasksTasksInsertPathParams pathParams;
    public TasksTasksInsertRequest withPathParams(TasksTasksInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasksInsertQueryParams queryParams;
    public TasksTasksInsertRequest withQueryParams(TasksTasksInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Task request;
    public TasksTasksInsertRequest withRequest(openapisdk.models.shared.Task request) {
        this.request = request;
        return this;
    }
    public TasksTasksInsertSecurity security;
    public TasksTasksInsertRequest withSecurity(TasksTasksInsertSecurity security) {
        this.security = security;
        return this;
    }
}