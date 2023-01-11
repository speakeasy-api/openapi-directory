package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest {
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams pathParams;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest withPathParams(DatalabelingProjectsDatasetsAnnotatedDatasetsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams queryParams;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest withQueryParams(DatalabelingProjectsDatasetsAnnotatedDatasetsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity security;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest withSecurity(DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity security) {
        this.security = security;
        return this;
    }
}