package openapisdk.models.operations;



public class BooksMylibraryBookshelvesListResponse {
    public openapisdk.models.shared.Bookshelves bookshelves;
    public BooksMylibraryBookshelvesListResponse withBookshelves(openapisdk.models.shared.Bookshelves bookshelves) {
        this.bookshelves = bookshelves;
        return this;
    }
    public String contentType;
    public BooksMylibraryBookshelvesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMylibraryBookshelvesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}