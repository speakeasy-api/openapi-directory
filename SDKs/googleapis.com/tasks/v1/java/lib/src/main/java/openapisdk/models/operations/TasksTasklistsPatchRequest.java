package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasklistsPatchRequest {
    public TasksTasklistsPatchPathParams pathParams;
    public TasksTasklistsPatchRequest withPathParams(TasksTasklistsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasklistsPatchQueryParams queryParams;
    public TasksTasklistsPatchRequest withQueryParams(TasksTasklistsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TaskList request;
    public TasksTasklistsPatchRequest withRequest(openapisdk.models.shared.TaskList request) {
        this.request = request;
        return this;
    }
    public TasksTasklistsPatchSecurity security;
    public TasksTasklistsPatchRequest withSecurity(TasksTasklistsPatchSecurity security) {
        this.security = security;
        return this;
    }
}