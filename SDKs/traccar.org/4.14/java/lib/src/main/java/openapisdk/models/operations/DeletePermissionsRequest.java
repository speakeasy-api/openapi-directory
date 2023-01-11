package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Permission request;
    public DeletePermissionsRequest withRequest(openapisdk.models.shared.Permission request) {
        this.request = request;
        return this;
    }
}