package openapisdk.models.operations;



public class ToolsShareFileRequest {
    public ToolsShareFileRequests request;
    public ToolsShareFileRequest withRequest(ToolsShareFileRequests request) {
        this.request = request;
        return this;
    }
    public ToolsShareFileSecurity security;
    public ToolsShareFileRequest withSecurity(ToolsShareFileSecurity security) {
        this.security = security;
        return this;
    }
}