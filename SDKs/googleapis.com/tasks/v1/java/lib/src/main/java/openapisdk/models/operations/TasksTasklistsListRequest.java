package openapisdk.models.operations;



public class TasksTasklistsListRequest {
    public TasksTasklistsListQueryParams queryParams;
    public TasksTasklistsListRequest withQueryParams(TasksTasklistsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksTasklistsListSecurity security;
    public TasksTasklistsListRequest withSecurity(TasksTasklistsListSecurity security) {
        this.security = security;
        return this;
    }
}