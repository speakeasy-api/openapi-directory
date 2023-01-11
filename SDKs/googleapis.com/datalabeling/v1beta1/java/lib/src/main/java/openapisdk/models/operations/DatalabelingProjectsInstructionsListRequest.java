package openapisdk.models.operations;



public class DatalabelingProjectsInstructionsListRequest {
    public DatalabelingProjectsInstructionsListPathParams pathParams;
    public DatalabelingProjectsInstructionsListRequest withPathParams(DatalabelingProjectsInstructionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsInstructionsListQueryParams queryParams;
    public DatalabelingProjectsInstructionsListRequest withQueryParams(DatalabelingProjectsInstructionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatalabelingProjectsInstructionsListSecurity security;
    public DatalabelingProjectsInstructionsListRequest withSecurity(DatalabelingProjectsInstructionsListSecurity security) {
        this.security = security;
        return this;
    }
}