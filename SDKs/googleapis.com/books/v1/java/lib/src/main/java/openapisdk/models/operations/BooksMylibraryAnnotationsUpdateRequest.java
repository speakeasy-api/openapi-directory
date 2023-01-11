package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryAnnotationsUpdateRequest {
    public BooksMylibraryAnnotationsUpdatePathParams pathParams;
    public BooksMylibraryAnnotationsUpdateRequest withPathParams(BooksMylibraryAnnotationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BooksMylibraryAnnotationsUpdateQueryParams queryParams;
    public BooksMylibraryAnnotationsUpdateRequest withQueryParams(BooksMylibraryAnnotationsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Annotation request;
    public BooksMylibraryAnnotationsUpdateRequest withRequest(openapisdk.models.shared.Annotation request) {
        this.request = request;
        return this;
    }
    public BooksMylibraryAnnotationsUpdateSecurity security;
    public BooksMylibraryAnnotationsUpdateRequest withSecurity(BooksMylibraryAnnotationsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}