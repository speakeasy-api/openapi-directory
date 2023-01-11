package openapisdk.models.operations;



public class TasksTasksListRequest {
    public TasksTasksListPathParams pathParams;
    public TasksTasksListRequest withPathParams(TasksTasksListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasksListQueryParams queryParams;
    public TasksTasksListRequest withQueryParams(TasksTasksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksTasksListSecurity security;
    public TasksTasksListRequest withSecurity(TasksTasksListSecurity security) {
        this.security = security;
        return this;
    }
}