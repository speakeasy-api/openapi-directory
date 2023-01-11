package openapisdk.models.operations;



public class BooksMylibraryBookshelvesGetResponse {
    public openapisdk.models.shared.Bookshelf bookshelf;
    public BooksMylibraryBookshelvesGetResponse withBookshelf(openapisdk.models.shared.Bookshelf bookshelf) {
        this.bookshelf = bookshelf;
        return this;
    }
    public String contentType;
    public BooksMylibraryBookshelvesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMylibraryBookshelvesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}