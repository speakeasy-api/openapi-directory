package openapisdk.models.operations;



public class DatalabelingProjectsAnnotationSpecSetsListRequest {
    public DatalabelingProjectsAnnotationSpecSetsListPathParams pathParams;
    public DatalabelingProjectsAnnotationSpecSetsListRequest withPathParams(DatalabelingProjectsAnnotationSpecSetsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsAnnotationSpecSetsListQueryParams queryParams;
    public DatalabelingProjectsAnnotationSpecSetsListRequest withQueryParams(DatalabelingProjectsAnnotationSpecSetsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatalabelingProjectsAnnotationSpecSetsListSecurity security;
    public DatalabelingProjectsAnnotationSpecSetsListRequest withSecurity(DatalabelingProjectsAnnotationSpecSetsListSecurity security) {
        this.security = security;
        return this;
    }
}