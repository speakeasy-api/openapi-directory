package openapisdk.models.operations;



public class BooksLayersVolumeAnnotationsListRequest {
    public BooksLayersVolumeAnnotationsListPathParams pathParams;
    public BooksLayersVolumeAnnotationsListRequest withPathParams(BooksLayersVolumeAnnotationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksLayersVolumeAnnotationsListQueryParams queryParams;
    public BooksLayersVolumeAnnotationsListRequest withQueryParams(BooksLayersVolumeAnnotationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksLayersVolumeAnnotationsListSecurity security;
    public BooksLayersVolumeAnnotationsListRequest withSecurity(BooksLayersVolumeAnnotationsListSecurity security) {
        this.security = security;
        return this;
    }
}