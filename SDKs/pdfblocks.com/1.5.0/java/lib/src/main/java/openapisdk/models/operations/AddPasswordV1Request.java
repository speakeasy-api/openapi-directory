package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddPasswordV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddPasswordV1RequestBody request;
    public AddPasswordV1Request withRequest(AddPasswordV1RequestBody request) {
        this.request = request;
        return this;
    }
}