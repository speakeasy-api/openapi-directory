package openapisdk.models.operations;



public class ListTasksResponse {
    public String contentType;
    public ListTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TasksCollection tasksCollection;
    public ListTasksResponse withTasksCollection(openapisdk.models.shared.TasksCollection tasksCollection) {
        this.tasksCollection = tasksCollection;
        return this;
    }
}