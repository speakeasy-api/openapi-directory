package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtractPagesV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ExtractPagesV1RequestBody request;
    public ExtractPagesV1Request withRequest(ExtractPagesV1RequestBody request) {
        this.request = request;
        return this;
    }
}