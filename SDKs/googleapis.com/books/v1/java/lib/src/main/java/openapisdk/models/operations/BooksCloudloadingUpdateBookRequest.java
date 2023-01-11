package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksCloudloadingUpdateBookRequest {
    public BooksCloudloadingUpdateBookQueryParams queryParams;
    public BooksCloudloadingUpdateBookRequest withQueryParams(BooksCloudloadingUpdateBookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BooksCloudloadingResource request;
    public BooksCloudloadingUpdateBookRequest withRequest(openapisdk.models.shared.BooksCloudloadingResource request) {
        this.request = request;
        return this;
    }
    public BooksCloudloadingUpdateBookSecurity security;
    public BooksCloudloadingUpdateBookRequest withSecurity(BooksCloudloadingUpdateBookSecurity security) {
        this.security = security;
        return this;
    }
}