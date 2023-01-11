package openapisdk.models.operations;



public class GetTasksResponse {
    public String contentType;
    public GetTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task[] tasks;
    public GetTasksResponse withTasks(openapisdk.models.shared.Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
}