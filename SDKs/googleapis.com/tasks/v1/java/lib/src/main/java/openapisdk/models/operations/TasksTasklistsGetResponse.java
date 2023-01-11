package openapisdk.models.operations;



public class TasksTasklistsGetResponse {
    public String contentType;
    public TasksTasklistsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasklistsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskList taskList;
    public TasksTasklistsGetResponse withTaskList(openapisdk.models.shared.TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
}