package openapisdk.models.operations;



public class ListItemAssignmentRequest {
    public String serverURL;
    public ListItemAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListItemAssignmentPathParams pathParams;
    public ListItemAssignmentRequest withPathParams(ListItemAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListItemAssignmentQueryParams queryParams;
    public ListItemAssignmentRequest withQueryParams(ListItemAssignmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListItemAssignmentSecurity security;
    public ListItemAssignmentRequest withSecurity(ListItemAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}