package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePasswordV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public RemovePasswordV1RequestBody request;
    public RemovePasswordV1Request withRequest(RemovePasswordV1RequestBody request) {
        this.request = request;
        return this;
    }
}