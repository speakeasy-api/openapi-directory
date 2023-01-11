package openapisdk.models.operations;



public class RunNamespacesTasksGetResponse {
    public String contentType;
    public RunNamespacesTasksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RunNamespacesTasksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public RunNamespacesTasksGetResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}