package openapisdk.models.operations;



public class TasksTasklistsPatchResponse {
    public String contentType;
    public TasksTasklistsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasklistsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskList taskList;
    public TasksTasklistsPatchResponse withTaskList(openapisdk.models.shared.TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
}