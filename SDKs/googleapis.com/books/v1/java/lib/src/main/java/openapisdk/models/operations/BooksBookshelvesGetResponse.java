package openapisdk.models.operations;



public class BooksBookshelvesGetResponse {
    public openapisdk.models.shared.Bookshelf bookshelf;
    public BooksBookshelvesGetResponse withBookshelf(openapisdk.models.shared.Bookshelf bookshelf) {
        this.bookshelf = bookshelf;
        return this;
    }
    public String contentType;
    public BooksBookshelvesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksBookshelvesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}