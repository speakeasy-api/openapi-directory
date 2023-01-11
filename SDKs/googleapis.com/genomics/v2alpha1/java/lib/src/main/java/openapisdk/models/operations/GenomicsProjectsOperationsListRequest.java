package openapisdk.models.operations;



public class GenomicsProjectsOperationsListRequest {
    public GenomicsProjectsOperationsListPathParams pathParams;
    public GenomicsProjectsOperationsListRequest withPathParams(GenomicsProjectsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenomicsProjectsOperationsListQueryParams queryParams;
    public GenomicsProjectsOperationsListRequest withQueryParams(GenomicsProjectsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GenomicsProjectsOperationsListSecurity security;
    public GenomicsProjectsOperationsListRequest withSecurity(GenomicsProjectsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}