package openapisdk.models.operations;



public class DatatransferApplicationsGetRequest {
    public DatatransferApplicationsGetPathParams pathParams;
    public DatatransferApplicationsGetRequest withPathParams(DatatransferApplicationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatatransferApplicationsGetQueryParams queryParams;
    public DatatransferApplicationsGetRequest withQueryParams(DatatransferApplicationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatatransferApplicationsGetSecurity security;
    public DatatransferApplicationsGetRequest withSecurity(DatatransferApplicationsGetSecurity security) {
        this.security = security;
        return this;
    }
}