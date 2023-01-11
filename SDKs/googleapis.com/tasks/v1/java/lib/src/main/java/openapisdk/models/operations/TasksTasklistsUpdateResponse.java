package openapisdk.models.operations;



public class TasksTasklistsUpdateResponse {
    public String contentType;
    public TasksTasklistsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasklistsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskList taskList;
    public TasksTasklistsUpdateResponse withTaskList(openapisdk.models.shared.TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
}