package openapisdk.models.operations;



public class LibraryagentShelvesBooksReturnRequest {
    public LibraryagentShelvesBooksReturnPathParams pathParams;
    public LibraryagentShelvesBooksReturnRequest withPathParams(LibraryagentShelvesBooksReturnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LibraryagentShelvesBooksReturnQueryParams queryParams;
    public LibraryagentShelvesBooksReturnRequest withQueryParams(LibraryagentShelvesBooksReturnQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LibraryagentShelvesBooksReturnSecurity security;
    public LibraryagentShelvesBooksReturnRequest withSecurity(LibraryagentShelvesBooksReturnSecurity security) {
        this.security = security;
        return this;
    }
}