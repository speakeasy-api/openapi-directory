package openapisdk.models.operations;



public class OsconfigProjectsPatchDeploymentsListRequest {
    public OsconfigProjectsPatchDeploymentsListPathParams pathParams;
    public OsconfigProjectsPatchDeploymentsListRequest withPathParams(OsconfigProjectsPatchDeploymentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsListQueryParams queryParams;
    public OsconfigProjectsPatchDeploymentsListRequest withQueryParams(OsconfigProjectsPatchDeploymentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OsconfigProjectsPatchDeploymentsListSecurity security;
    public OsconfigProjectsPatchDeploymentsListRequest withSecurity(OsconfigProjectsPatchDeploymentsListSecurity security) {
        this.security = security;
        return this;
    }
}