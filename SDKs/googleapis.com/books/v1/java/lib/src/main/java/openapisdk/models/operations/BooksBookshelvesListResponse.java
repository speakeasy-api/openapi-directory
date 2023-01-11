package openapisdk.models.operations;



public class BooksBookshelvesListResponse {
    public openapisdk.models.shared.Bookshelves bookshelves;
    public BooksBookshelvesListResponse withBookshelves(openapisdk.models.shared.Bookshelves bookshelves) {
        this.bookshelves = bookshelves;
        return this;
    }
    public String contentType;
    public BooksBookshelvesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksBookshelvesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}