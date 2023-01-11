package openapisdk.models.operations;



public class TasksTasksPatchResponse {
    public String contentType;
    public TasksTasksPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasksPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public TasksTasksPatchResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}