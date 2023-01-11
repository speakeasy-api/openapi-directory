package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasklistsInsertRequest {
    public TasksTasklistsInsertQueryParams queryParams;
    public TasksTasklistsInsertRequest withQueryParams(TasksTasklistsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TaskList request;
    public TasksTasklistsInsertRequest withRequest(openapisdk.models.shared.TaskList request) {
        this.request = request;
        return this;
    }
    public TasksTasklistsInsertSecurity security;
    public TasksTasklistsInsertRequest withSecurity(TasksTasklistsInsertSecurity security) {
        this.security = security;
        return this;
    }
}