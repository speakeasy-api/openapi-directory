package openapisdk.models.operations;



public class TasksTasksMoveRequest {
    public TasksTasksMovePathParams pathParams;
    public TasksTasksMoveRequest withPathParams(TasksTasksMovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TasksTasksMoveQueryParams queryParams;
    public TasksTasksMoveRequest withQueryParams(TasksTasksMoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TasksTasksMoveSecurity security;
    public TasksTasksMoveRequest withSecurity(TasksTasksMoveSecurity security) {
        this.security = security;
        return this;
    }
}