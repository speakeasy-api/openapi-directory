package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryAnnotationsInsertRequest {
    public BooksMylibraryAnnotationsInsertQueryParams queryParams;
    public BooksMylibraryAnnotationsInsertRequest withQueryParams(BooksMylibraryAnnotationsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Annotation request;
    public BooksMylibraryAnnotationsInsertRequest withRequest(openapisdk.models.shared.Annotation request) {
        this.request = request;
        return this;
    }
    public BooksMylibraryAnnotationsInsertSecurity security;
    public BooksMylibraryAnnotationsInsertRequest withSecurity(BooksMylibraryAnnotationsInsertSecurity security) {
        this.security = security;
        return this;
    }
}