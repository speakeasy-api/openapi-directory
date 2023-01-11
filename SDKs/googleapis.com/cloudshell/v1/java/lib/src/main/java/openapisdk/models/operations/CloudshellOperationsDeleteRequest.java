package openapisdk.models.operations;



public class CloudshellOperationsDeleteRequest {
    public CloudshellOperationsDeletePathParams pathParams;
    public CloudshellOperationsDeleteRequest withPathParams(CloudshellOperationsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudshellOperationsDeleteQueryParams queryParams;
    public CloudshellOperationsDeleteRequest withQueryParams(CloudshellOperationsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudshellOperationsDeleteSecurity security;
    public CloudshellOperationsDeleteRequest withSecurity(CloudshellOperationsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}