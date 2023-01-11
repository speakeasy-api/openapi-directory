package openapisdk.models.operations;



public class BooksMylibraryAnnotationsInsertResponse {
    public openapisdk.models.shared.Annotation annotation;
    public BooksMylibraryAnnotationsInsertResponse withAnnotation(openapisdk.models.shared.Annotation annotation) {
        this.annotation = annotation;
        return this;
    }
    public String contentType;
    public BooksMylibraryAnnotationsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMylibraryAnnotationsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}