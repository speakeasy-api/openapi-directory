package openapisdk.models.operations;



public class CloudtraceProjectsTracesListRequest {
    public CloudtraceProjectsTracesListPathParams pathParams;
    public CloudtraceProjectsTracesListRequest withPathParams(CloudtraceProjectsTracesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtraceProjectsTracesListQueryParams queryParams;
    public CloudtraceProjectsTracesListRequest withQueryParams(CloudtraceProjectsTracesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudtraceProjectsTracesListSecurity security;
    public CloudtraceProjectsTracesListRequest withSecurity(CloudtraceProjectsTracesListSecurity security) {
        this.security = security;
        return this;
    }
}