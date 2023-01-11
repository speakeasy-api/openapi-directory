package openapisdk.models.operations;



public class BooksVolumesMybooksListRequest {
    public BooksVolumesMybooksListQueryParams queryParams;
    public BooksVolumesMybooksListRequest withQueryParams(BooksVolumesMybooksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksVolumesMybooksListSecurity security;
    public BooksVolumesMybooksListRequest withSecurity(BooksVolumesMybooksListSecurity security) {
        this.security = security;
        return this;
    }
}