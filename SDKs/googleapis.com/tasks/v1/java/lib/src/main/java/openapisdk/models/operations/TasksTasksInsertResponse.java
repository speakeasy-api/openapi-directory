package openapisdk.models.operations;



public class TasksTasksInsertResponse {
    public String contentType;
    public TasksTasksInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasksInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public TasksTasksInsertResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}