package openapisdk.models.operations;



public class TasksTasksDeleteRequest {
    public TasksTasksDeletePathParams pathParams;
    public TasksTasksDeleteRequest withPathParams(TasksTasksDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasksDeleteQueryParams queryParams;
    public TasksTasksDeleteRequest withQueryParams(TasksTasksDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksTasksDeleteSecurity security;
    public TasksTasksDeleteRequest withSecurity(TasksTasksDeleteSecurity security) {
        this.security = security;
        return this;
    }
}