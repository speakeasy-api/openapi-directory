package openapisdk.models.operations;



public class TasksTasklistsGetRequest {
    public TasksTasklistsGetPathParams pathParams;
    public TasksTasklistsGetRequest withPathParams(TasksTasklistsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasklistsGetQueryParams queryParams;
    public TasksTasklistsGetRequest withQueryParams(TasksTasklistsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksTasklistsGetSecurity security;
    public TasksTasklistsGetRequest withSecurity(TasksTasklistsGetSecurity security) {
        this.security = security;
        return this;
    }
}