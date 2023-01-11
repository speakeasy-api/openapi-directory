package openapisdk.models.operations;



public class TasksTasklistsDeleteRequest {
    public TasksTasklistsDeletePathParams pathParams;
    public TasksTasklistsDeleteRequest withPathParams(TasksTasklistsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasklistsDeleteQueryParams queryParams;
    public TasksTasklistsDeleteRequest withQueryParams(TasksTasklistsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksTasklistsDeleteSecurity security;
    public TasksTasklistsDeleteRequest withSecurity(TasksTasklistsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}