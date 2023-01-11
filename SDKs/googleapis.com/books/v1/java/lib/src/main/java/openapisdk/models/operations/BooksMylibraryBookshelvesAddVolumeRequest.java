package openapisdk.models.operations;



public class BooksMylibraryBookshelvesAddVolumeRequest {
    public BooksMylibraryBookshelvesAddVolumePathParams pathParams;
    public BooksMylibraryBookshelvesAddVolumeRequest withPathParams(BooksMylibraryBookshelvesAddVolumePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksMylibraryBookshelvesAddVolumeQueryParams queryParams;
    public BooksMylibraryBookshelvesAddVolumeRequest withQueryParams(BooksMylibraryBookshelvesAddVolumeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMylibraryBookshelvesAddVolumeSecurity security;
    public BooksMylibraryBookshelvesAddVolumeRequest withSecurity(BooksMylibraryBookshelvesAddVolumeSecurity security) {
        this.security = security;
        return this;
    }
}