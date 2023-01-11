package openapisdk.models.operations;



public class CloudsupportCasesSearchRequest {
    public CloudsupportCasesSearchQueryParams queryParams;
    public CloudsupportCasesSearchRequest withQueryParams(CloudsupportCasesSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudsupportCasesSearchSecurity security;
    public CloudsupportCasesSearchRequest withSecurity(CloudsupportCasesSearchSecurity security) {
        this.security = security;
        return this;
    }
}