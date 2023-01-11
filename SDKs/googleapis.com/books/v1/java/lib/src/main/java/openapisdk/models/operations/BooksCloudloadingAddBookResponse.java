package openapisdk.models.operations;



public class BooksCloudloadingAddBookResponse {
    public openapisdk.models.shared.BooksCloudloadingResource booksCloudloadingResource;
    public BooksCloudloadingAddBookResponse withBooksCloudloadingResource(openapisdk.models.shared.BooksCloudloadingResource booksCloudloadingResource) {
        this.booksCloudloadingResource = booksCloudloadingResource;
        return this;
    }
    public String contentType;
    public BooksCloudloadingAddBookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksCloudloadingAddBookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}