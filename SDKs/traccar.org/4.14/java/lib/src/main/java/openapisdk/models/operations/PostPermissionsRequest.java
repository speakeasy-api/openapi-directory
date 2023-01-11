package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPermissionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Permission request;
    public PostPermissionsRequest withRequest(openapisdk.models.shared.Permission request) {
        this.request = request;
        return this;
    }
}