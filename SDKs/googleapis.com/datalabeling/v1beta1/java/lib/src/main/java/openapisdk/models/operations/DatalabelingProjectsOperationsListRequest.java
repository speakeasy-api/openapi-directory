package openapisdk.models.operations;



public class DatalabelingProjectsOperationsListRequest {
    public DatalabelingProjectsOperationsListPathParams pathParams;
    public DatalabelingProjectsOperationsListRequest withPathParams(DatalabelingProjectsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsOperationsListQueryParams queryParams;
    public DatalabelingProjectsOperationsListRequest withQueryParams(DatalabelingProjectsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatalabelingProjectsOperationsListSecurity security;
    public DatalabelingProjectsOperationsListRequest withSecurity(DatalabelingProjectsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}