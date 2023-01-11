package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDatasetAsyncRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadDatasetAsyncRequestBody request;
    public UploadDatasetAsyncRequest withRequest(UploadDatasetAsyncRequestBody request) {
        this.request = request;
        return this;
    }
    public UploadDatasetAsyncSecurity security;
    public UploadDatasetAsyncRequest withSecurity(UploadDatasetAsyncSecurity security) {
        this.security = security;
        return this;
    }
}