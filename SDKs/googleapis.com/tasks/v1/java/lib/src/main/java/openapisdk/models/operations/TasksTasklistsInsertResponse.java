package openapisdk.models.operations;



public class TasksTasklistsInsertResponse {
    public String contentType;
    public TasksTasklistsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasklistsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskList taskList;
    public TasksTasklistsInsertResponse withTaskList(openapisdk.models.shared.TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
}