package openapisdk.models.operations;



public class GetWorkspaceResponse {
    public String contentType;
    public GetWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWorkspace200ApplicationJson getWorkspace200ApplicationJSONObject;
    public GetWorkspaceResponse withGetWorkspace200ApplicationJsonObject(GetWorkspace200ApplicationJson getWorkspace200ApplicationJSONObject) {
        this.getWorkspace200ApplicationJSONObject = getWorkspace200ApplicationJSONObject;
        return this;
    }
    public GetWorkspace401ApplicationJson getWorkspace401ApplicationJSONObject;
    public GetWorkspaceResponse withGetWorkspace401ApplicationJsonObject(GetWorkspace401ApplicationJson getWorkspace401ApplicationJSONObject) {
        this.getWorkspace401ApplicationJSONObject = getWorkspace401ApplicationJSONObject;
        return this;
    }
    public GetWorkspace403ApplicationJson getWorkspace403ApplicationJSONObject;
    public GetWorkspaceResponse withGetWorkspace403ApplicationJsonObject(GetWorkspace403ApplicationJson getWorkspace403ApplicationJSONObject) {
        this.getWorkspace403ApplicationJSONObject = getWorkspace403ApplicationJSONObject;
        return this;
    }
    public GetWorkspace404ApplicationJson getWorkspace404ApplicationJSONObject;
    public GetWorkspaceResponse withGetWorkspace404ApplicationJsonObject(GetWorkspace404ApplicationJson getWorkspace404ApplicationJSONObject) {
        this.getWorkspace404ApplicationJSONObject = getWorkspace404ApplicationJSONObject;
        return this;
    }
    public GetWorkspace422ApplicationJson getWorkspace422ApplicationJSONObject;
    public GetWorkspaceResponse withGetWorkspace422ApplicationJsonObject(GetWorkspace422ApplicationJson getWorkspace422ApplicationJSONObject) {
        this.getWorkspace422ApplicationJSONObject = getWorkspace422ApplicationJSONObject;
        return this;
    }
    public GetWorkspace500ApplicationJson getWorkspace500ApplicationJSONObject;
    public GetWorkspaceResponse withGetWorkspace500ApplicationJsonObject(GetWorkspace500ApplicationJson getWorkspace500ApplicationJSONObject) {
        this.getWorkspace500ApplicationJSONObject = getWorkspace500ApplicationJSONObject;
        return this;
    }
}