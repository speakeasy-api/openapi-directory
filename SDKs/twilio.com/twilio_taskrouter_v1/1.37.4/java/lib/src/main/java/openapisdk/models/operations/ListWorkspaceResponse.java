package openapisdk.models.operations;



public class ListWorkspaceResponse {
    public String contentType;
    public ListWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListWorkspaceListWorkspaceResponse listWorkspaceResponse;
    public ListWorkspaceResponse withListWorkspaceResponse(ListWorkspaceListWorkspaceResponse listWorkspaceResponse) {
        this.listWorkspaceResponse = listWorkspaceResponse;
        return this;
    }
    public Long statusCode;
    public ListWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}