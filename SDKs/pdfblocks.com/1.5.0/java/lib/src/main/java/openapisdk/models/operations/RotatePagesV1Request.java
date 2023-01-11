package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RotatePagesV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public RotatePagesV1RequestBody request;
    public RotatePagesV1Request withRequest(RotatePagesV1RequestBody request) {
        this.request = request;
        return this;
    }
}