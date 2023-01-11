package openapisdk.models.operations;



public class GetLibraryRequest {
    public GetLibraryPathParams pathParams;
    public GetLibraryRequest withPathParams(GetLibraryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLibraryQueryParams queryParams;
    public GetLibraryRequest withQueryParams(GetLibraryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLibrarySecurity security;
    public GetLibraryRequest withSecurity(GetLibrarySecurity security) {
        this.security = security;
        return this;
    }
}