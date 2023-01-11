package openapisdk.models.operations;



public class TasksTasklistsListResponse {
    public String contentType;
    public TasksTasklistsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksTasklistsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskLists taskLists;
    public TasksTasklistsListResponse withTaskLists(openapisdk.models.shared.TaskLists taskLists) {
        this.taskLists = taskLists;
        return this;
    }
}