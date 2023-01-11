package openapisdk.models.operations;



public class BooksCloudloadingUpdateBookResponse {
    public openapisdk.models.shared.BooksCloudloadingResource booksCloudloadingResource;
    public BooksCloudloadingUpdateBookResponse withBooksCloudloadingResource(openapisdk.models.shared.BooksCloudloadingResource booksCloudloadingResource) {
        this.booksCloudloadingResource = booksCloudloadingResource;
        return this;
    }
    public String contentType;
    public BooksCloudloadingUpdateBookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksCloudloadingUpdateBookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}