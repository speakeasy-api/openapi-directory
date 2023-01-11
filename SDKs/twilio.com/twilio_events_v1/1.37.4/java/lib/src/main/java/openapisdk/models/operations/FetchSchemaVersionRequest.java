package openapisdk.models.operations;



public class FetchSchemaVersionRequest {
    public String serverURL;
    public FetchSchemaVersionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSchemaVersionPathParams pathParams;
    public FetchSchemaVersionRequest withPathParams(FetchSchemaVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSchemaVersionSecurity security;
    public FetchSchemaVersionRequest withSecurity(FetchSchemaVersionSecurity security) {
        this.security = security;
        return this;
    }
}