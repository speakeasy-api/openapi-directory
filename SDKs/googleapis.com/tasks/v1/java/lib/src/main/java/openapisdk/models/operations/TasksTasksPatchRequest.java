package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksPatchRequest {
    public TasksTasksPatchPathParams pathParams;
    public TasksTasksPatchRequest withPathParams(TasksTasksPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasksPatchQueryParams queryParams;
    public TasksTasksPatchRequest withQueryParams(TasksTasksPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Task request;
    public TasksTasksPatchRequest withRequest(openapisdk.models.shared.Task request) {
        this.request = request;
        return this;
    }
    public TasksTasksPatchSecurity security;
    public TasksTasksPatchRequest withSecurity(TasksTasksPatchSecurity security) {
        this.security = security;
        return this;
    }
}