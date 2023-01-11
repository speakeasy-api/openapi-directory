package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReversePagesV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ReversePagesV1RequestBody request;
    public ReversePagesV1Request withRequest(ReversePagesV1RequestBody request) {
        this.request = request;
        return this;
    }
}