package openapisdk.models.operations;



public class BooksVolumesAssociatedListRequest {
    public BooksVolumesAssociatedListPathParams pathParams;
    public BooksVolumesAssociatedListRequest withPathParams(BooksVolumesAssociatedListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksVolumesAssociatedListQueryParams queryParams;
    public BooksVolumesAssociatedListRequest withQueryParams(BooksVolumesAssociatedListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksVolumesAssociatedListSecurity security;
    public BooksVolumesAssociatedListRequest withSecurity(BooksVolumesAssociatedListSecurity security) {
        this.security = security;
        return this;
    }
}