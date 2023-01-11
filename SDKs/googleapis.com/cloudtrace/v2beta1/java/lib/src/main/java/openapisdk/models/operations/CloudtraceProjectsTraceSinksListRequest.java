package openapisdk.models.operations;



public class CloudtraceProjectsTraceSinksListRequest {
    public CloudtraceProjectsTraceSinksListPathParams pathParams;
    public CloudtraceProjectsTraceSinksListRequest withPathParams(CloudtraceProjectsTraceSinksListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtraceProjectsTraceSinksListQueryParams queryParams;
    public CloudtraceProjectsTraceSinksListRequest withQueryParams(CloudtraceProjectsTraceSinksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudtraceProjectsTraceSinksListSecurity security;
    public CloudtraceProjectsTraceSinksListRequest withSecurity(CloudtraceProjectsTraceSinksListSecurity security) {
        this.security = security;
        return this;
    }
}