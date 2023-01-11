package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetAsync1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateDatasetAsync1RequestBody request;
    public UpdateDatasetAsync1Request withRequest(UpdateDatasetAsync1RequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateDatasetAsync1Security security;
    public UpdateDatasetAsync1Request withSecurity(UpdateDatasetAsync1Security security) {
        this.security = security;
        return this;
    }
}