package openapisdk.models.operations;



public class DeleteWorkspaceResponse {
    public String contentType;
    public DeleteWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteWorkspace200ApplicationJson deleteWorkspace200ApplicationJSONObject;
    public DeleteWorkspaceResponse withDeleteWorkspace200ApplicationJsonObject(DeleteWorkspace200ApplicationJson deleteWorkspace200ApplicationJSONObject) {
        this.deleteWorkspace200ApplicationJSONObject = deleteWorkspace200ApplicationJSONObject;
        return this;
    }
    public DeleteWorkspace401ApplicationJson deleteWorkspace401ApplicationJSONObject;
    public DeleteWorkspaceResponse withDeleteWorkspace401ApplicationJsonObject(DeleteWorkspace401ApplicationJson deleteWorkspace401ApplicationJSONObject) {
        this.deleteWorkspace401ApplicationJSONObject = deleteWorkspace401ApplicationJSONObject;
        return this;
    }
    public DeleteWorkspace403ApplicationJson deleteWorkspace403ApplicationJSONObject;
    public DeleteWorkspaceResponse withDeleteWorkspace403ApplicationJsonObject(DeleteWorkspace403ApplicationJson deleteWorkspace403ApplicationJSONObject) {
        this.deleteWorkspace403ApplicationJSONObject = deleteWorkspace403ApplicationJSONObject;
        return this;
    }
    public DeleteWorkspace404ApplicationJson deleteWorkspace404ApplicationJSONObject;
    public DeleteWorkspaceResponse withDeleteWorkspace404ApplicationJsonObject(DeleteWorkspace404ApplicationJson deleteWorkspace404ApplicationJSONObject) {
        this.deleteWorkspace404ApplicationJSONObject = deleteWorkspace404ApplicationJSONObject;
        return this;
    }
    public DeleteWorkspace422ApplicationJson deleteWorkspace422ApplicationJSONObject;
    public DeleteWorkspaceResponse withDeleteWorkspace422ApplicationJsonObject(DeleteWorkspace422ApplicationJson deleteWorkspace422ApplicationJSONObject) {
        this.deleteWorkspace422ApplicationJSONObject = deleteWorkspace422ApplicationJSONObject;
        return this;
    }
    public DeleteWorkspace500ApplicationJson deleteWorkspace500ApplicationJSONObject;
    public DeleteWorkspaceResponse withDeleteWorkspace500ApplicationJsonObject(DeleteWorkspace500ApplicationJson deleteWorkspace500ApplicationJSONObject) {
        this.deleteWorkspace500ApplicationJSONObject = deleteWorkspace500ApplicationJSONObject;
        return this;
    }
}