package openapisdk.models.operations;



public class OsconfigProjectsPatchJobsListRequest {
    public OsconfigProjectsPatchJobsListPathParams pathParams;
    public OsconfigProjectsPatchJobsListRequest withPathParams(OsconfigProjectsPatchJobsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsPatchJobsListQueryParams queryParams;
    public OsconfigProjectsPatchJobsListRequest withQueryParams(OsconfigProjectsPatchJobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OsconfigProjectsPatchJobsListSecurity security;
    public OsconfigProjectsPatchJobsListRequest withSecurity(OsconfigProjectsPatchJobsListSecurity security) {
        this.security = security;
        return this;
    }
}