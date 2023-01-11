package openapisdk.models.operations;



public class BooksMylibraryAnnotationsListResponse {
    public openapisdk.models.shared.Annotations annotations;
    public BooksMylibraryAnnotationsListResponse withAnnotations(openapisdk.models.shared.Annotations annotations) {
        this.annotations = annotations;
        return this;
    }
    public String contentType;
    public BooksMylibraryAnnotationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMylibraryAnnotationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}