package openapisdk.models.operations;



public class BooksLayersAnnotationDataListRequest {
    public BooksLayersAnnotationDataListPathParams pathParams;
    public BooksLayersAnnotationDataListRequest withPathParams(BooksLayersAnnotationDataListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksLayersAnnotationDataListQueryParams queryParams;
    public BooksLayersAnnotationDataListRequest withQueryParams(BooksLayersAnnotationDataListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksLayersAnnotationDataListSecurity security;
    public BooksLayersAnnotationDataListRequest withSecurity(BooksLayersAnnotationDataListSecurity security) {
        this.security = security;
        return this;
    }
}