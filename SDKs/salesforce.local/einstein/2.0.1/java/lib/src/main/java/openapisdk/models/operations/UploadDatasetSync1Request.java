package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDatasetSync1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadDatasetSync1RequestBody request;
    public UploadDatasetSync1Request withRequest(UploadDatasetSync1RequestBody request) {
        this.request = request;
        return this;
    }
    public UploadDatasetSync1Security security;
    public UploadDatasetSync1Request withSecurity(UploadDatasetSync1Security security) {
        this.security = security;
        return this;
    }
}