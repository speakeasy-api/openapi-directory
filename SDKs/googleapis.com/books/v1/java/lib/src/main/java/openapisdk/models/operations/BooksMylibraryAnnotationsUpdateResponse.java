package openapisdk.models.operations;



public class BooksMylibraryAnnotationsUpdateResponse {
    public openapisdk.models.shared.Annotation annotation;
    public BooksMylibraryAnnotationsUpdateResponse withAnnotation(openapisdk.models.shared.Annotation annotation) {
        this.annotation = annotation;
        return this;
    }
    public String contentType;
    public BooksMylibraryAnnotationsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMylibraryAnnotationsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}