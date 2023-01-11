package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDatasetSyncRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadDatasetSyncRequestBody request;
    public UploadDatasetSyncRequest withRequest(UploadDatasetSyncRequestBody request) {
        this.request = request;
        return this;
    }
    public UploadDatasetSyncSecurity security;
    public UploadDatasetSyncRequest withSecurity(UploadDatasetSyncSecurity security) {
        this.security = security;
        return this;
    }
}