package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDatasetAsync1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadDatasetAsync1RequestBody request;
    public UploadDatasetAsync1Request withRequest(UploadDatasetAsync1RequestBody request) {
        this.request = request;
        return this;
    }
    public UploadDatasetAsync1Security security;
    public UploadDatasetAsync1Request withSecurity(UploadDatasetAsync1Security security) {
        this.security = security;
        return this;
    }
}