package openapisdk.models.operations;



public class ShowTaskResponse {
    public String contentType;
    public ShowTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowTaskResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public Long statusCode;
    public ShowTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public ShowTaskResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}