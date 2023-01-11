package openapisdk.models.operations;



public class ListSourceTasksResponse {
    public String contentType;
    public ListSourceTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListSourceTasksResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public Long statusCode;
    public ListSourceTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TasksCollection tasksCollection;
    public ListSourceTasksResponse withTasksCollection(openapisdk.models.shared.TasksCollection tasksCollection) {
        this.tasksCollection = tasksCollection;
        return this;
    }
}