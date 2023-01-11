package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddRestrictionsV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddRestrictionsV1RequestBody request;
    public AddRestrictionsV1Request withRequest(AddRestrictionsV1RequestBody request) {
        this.request = request;
        return this;
    }
}