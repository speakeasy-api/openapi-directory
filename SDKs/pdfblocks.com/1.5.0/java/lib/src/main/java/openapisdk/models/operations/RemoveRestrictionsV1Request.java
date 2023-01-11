package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveRestrictionsV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public RemoveRestrictionsV1RequestBody request;
    public RemoveRestrictionsV1Request withRequest(RemoveRestrictionsV1RequestBody request) {
        this.request = request;
        return this;
    }
}