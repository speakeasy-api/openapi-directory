package openapisdk.models.operations;



public class TasksTasksGetResponse {
    public String contentType;
    public TasksTasksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public TasksTasksGetResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}