package openapisdk.models.operations;



public class TasksTasksListResponse {
    public String contentType;
    public TasksTasksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tasks tasks;
    public TasksTasksListResponse withTasks(openapisdk.models.shared.Tasks tasks) {
        this.tasks = tasks;
        return this;
    }
}