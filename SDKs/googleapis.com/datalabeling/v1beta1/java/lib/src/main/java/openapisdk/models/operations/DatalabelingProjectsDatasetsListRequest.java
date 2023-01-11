package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsListRequest {
    public DatalabelingProjectsDatasetsListPathParams pathParams;
    public DatalabelingProjectsDatasetsListRequest withPathParams(DatalabelingProjectsDatasetsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsListQueryParams queryParams;
    public DatalabelingProjectsDatasetsListRequest withQueryParams(DatalabelingProjectsDatasetsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatalabelingProjectsDatasetsListSecurity security;
    public DatalabelingProjectsDatasetsListRequest withSecurity(DatalabelingProjectsDatasetsListSecurity security) {
        this.security = security;
        return this;
    }
}