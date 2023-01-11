package openapisdk.models.operations;



public class BooksMylibraryReadingpositionsGetResponse {
    public String contentType;
    public BooksMylibraryReadingpositionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReadingPosition readingPosition;
    public BooksMylibraryReadingpositionsGetResponse withReadingPosition(openapisdk.models.shared.ReadingPosition readingPosition) {
        this.readingPosition = readingPosition;
        return this;
    }
    public Long statusCode;
    public BooksMylibraryReadingpositionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}