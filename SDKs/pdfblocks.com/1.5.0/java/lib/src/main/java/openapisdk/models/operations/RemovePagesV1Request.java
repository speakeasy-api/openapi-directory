package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePagesV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public RemovePagesV1RequestBody request;
    public RemovePagesV1Request withRequest(RemovePagesV1RequestBody request) {
        this.request = request;
        return this;
    }
}