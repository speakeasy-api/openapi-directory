package openapisdk.models.operations;



public class TasksTasksMoveResponse {
    public String contentType;
    public TasksTasksMoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasksMoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public TasksTasksMoveResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}