package openapisdk.models.operations;



public class UpdateTaskResponse {
    public String contentType;
    public UpdateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public UpdateTaskResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}