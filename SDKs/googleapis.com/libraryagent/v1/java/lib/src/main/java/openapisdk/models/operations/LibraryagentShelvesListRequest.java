package openapisdk.models.operations;



public class LibraryagentShelvesListRequest {
    public LibraryagentShelvesListQueryParams queryParams;
    public LibraryagentShelvesListRequest withQueryParams(LibraryagentShelvesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LibraryagentShelvesListSecurity security;
    public LibraryagentShelvesListRequest withSecurity(LibraryagentShelvesListSecurity security) {
        this.security = security;
        return this;
    }
}