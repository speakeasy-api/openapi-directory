package openapisdk.models.operations;



public class LibraryagentShelvesBooksBorrowRequest {
    public LibraryagentShelvesBooksBorrowPathParams pathParams;
    public LibraryagentShelvesBooksBorrowRequest withPathParams(LibraryagentShelvesBooksBorrowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LibraryagentShelvesBooksBorrowQueryParams queryParams;
    public LibraryagentShelvesBooksBorrowRequest withQueryParams(LibraryagentShelvesBooksBorrowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LibraryagentShelvesBooksBorrowSecurity security;
    public LibraryagentShelvesBooksBorrowRequest withSecurity(LibraryagentShelvesBooksBorrowSecurity security) {
        this.security = security;
        return this;
    }
}