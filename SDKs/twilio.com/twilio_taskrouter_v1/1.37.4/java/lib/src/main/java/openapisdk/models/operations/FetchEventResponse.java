package openapisdk.models.operations;



public class FetchEventResponse {
    public String contentType;
    public FetchEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceEvent taskrouterV1WorkspaceEvent;
    public FetchEventResponse withTaskrouterV1WorkspaceEvent(openapisdk.models.shared.TaskrouterV1WorkspaceEvent taskrouterV1WorkspaceEvent) {
        this.taskrouterV1WorkspaceEvent = taskrouterV1WorkspaceEvent;
        return this;
    }
}