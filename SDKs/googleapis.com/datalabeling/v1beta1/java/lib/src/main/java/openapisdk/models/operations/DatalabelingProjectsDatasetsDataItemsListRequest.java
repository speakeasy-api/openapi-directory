package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsDataItemsListRequest {
    public DatalabelingProjectsDatasetsDataItemsListPathParams pathParams;
    public DatalabelingProjectsDatasetsDataItemsListRequest withPathParams(DatalabelingProjectsDatasetsDataItemsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsDataItemsListQueryParams queryParams;
    public DatalabelingProjectsDatasetsDataItemsListRequest withQueryParams(DatalabelingProjectsDatasetsDataItemsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatalabelingProjectsDatasetsDataItemsListSecurity security;
    public DatalabelingProjectsDatasetsDataItemsListRequest withSecurity(DatalabelingProjectsDatasetsDataItemsListSecurity security) {
        this.security = security;
        return this;
    }
}