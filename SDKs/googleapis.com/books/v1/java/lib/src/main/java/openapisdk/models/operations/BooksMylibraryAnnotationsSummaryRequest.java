package openapisdk.models.operations;



public class BooksMylibraryAnnotationsSummaryRequest {
    public BooksMylibraryAnnotationsSummaryQueryParams queryParams;
    public BooksMylibraryAnnotationsSummaryRequest withQueryParams(BooksMylibraryAnnotationsSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksMylibraryAnnotationsSummarySecurity security;
    public BooksMylibraryAnnotationsSummaryRequest withSecurity(BooksMylibraryAnnotationsSummarySecurity security) {
        this.security = security;
        return this;
    }
}