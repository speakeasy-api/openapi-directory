package openapisdk.models.operations;



public class FetchSchemaRequest {
    public String serverURL;
    public FetchSchemaRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSchemaPathParams pathParams;
    public FetchSchemaRequest withPathParams(FetchSchemaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSchemaSecurity security;
    public FetchSchemaRequest withSecurity(FetchSchemaSecurity security) {
        this.security = security;
        return this;
    }
}