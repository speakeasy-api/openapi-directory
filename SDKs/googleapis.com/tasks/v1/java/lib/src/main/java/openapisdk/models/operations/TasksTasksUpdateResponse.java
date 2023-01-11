package openapisdk.models.operations;



public class TasksTasksUpdateResponse {
    public String contentType;
    public TasksTasksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public TasksTasksUpdateResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}