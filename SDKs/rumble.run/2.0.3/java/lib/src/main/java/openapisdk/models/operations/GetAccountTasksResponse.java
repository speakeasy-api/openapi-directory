package openapisdk.models.operations;



public class GetAccountTasksResponse {
    public String contentType;
    public GetAccountTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task[] tasks;
    public GetAccountTasksResponse withTasks(openapisdk.models.shared.Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
}