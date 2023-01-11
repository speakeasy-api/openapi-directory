package openapisdk.models.operations;



public class BooksVolumesGetRequest {
    public BooksVolumesGetPathParams pathParams;
    public BooksVolumesGetRequest withPathParams(BooksVolumesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksVolumesGetQueryParams queryParams;
    public BooksVolumesGetRequest withQueryParams(BooksVolumesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksVolumesGetSecurity security;
    public BooksVolumesGetRequest withSecurity(BooksVolumesGetSecurity security) {
        this.security = security;
        return this;
    }
}