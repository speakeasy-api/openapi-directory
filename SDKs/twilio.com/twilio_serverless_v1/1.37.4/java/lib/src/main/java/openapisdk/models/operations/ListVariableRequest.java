package openapisdk.models.operations;



public class ListVariableRequest {
    public String serverURL;
    public ListVariableRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListVariablePathParams pathParams;
    public ListVariableRequest withPathParams(ListVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListVariableQueryParams queryParams;
    public ListVariableRequest withQueryParams(ListVariableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVariableSecurity security;
    public ListVariableRequest withSecurity(ListVariableSecurity security) {
        this.security = security;
        return this;
    }
}