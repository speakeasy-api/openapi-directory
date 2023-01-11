package openapisdk.models.operations;



public class CloudsupportCasesListRequest {
    public CloudsupportCasesListPathParams pathParams;
    public CloudsupportCasesListRequest withPathParams(CloudsupportCasesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudsupportCasesListQueryParams queryParams;
    public CloudsupportCasesListRequest withQueryParams(CloudsupportCasesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudsupportCasesListSecurity security;
    public CloudsupportCasesListRequest withSecurity(CloudsupportCasesListSecurity security) {
        this.security = security;
        return this;
    }
}