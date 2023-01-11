package openapisdk.models.operations;



public class BooksMylibraryAnnotationsSummaryResponse {
    public openapisdk.models.shared.AnnotationsSummary annotationsSummary;
    public BooksMylibraryAnnotationsSummaryResponse withAnnotationsSummary(openapisdk.models.shared.AnnotationsSummary annotationsSummary) {
        this.annotationsSummary = annotationsSummary;
        return this;
    }
    public String contentType;
    public BooksMylibraryAnnotationsSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksMylibraryAnnotationsSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}