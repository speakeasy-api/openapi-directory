package openapisdk.models.operations;



public class DatatransferApplicationsListRequest {
    public DatatransferApplicationsListQueryParams queryParams;
    public DatatransferApplicationsListRequest withQueryParams(DatatransferApplicationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatatransferApplicationsListSecurity security;
    public DatatransferApplicationsListRequest withSecurity(DatatransferApplicationsListSecurity security) {
        this.security = security;
        return this;
    }
}