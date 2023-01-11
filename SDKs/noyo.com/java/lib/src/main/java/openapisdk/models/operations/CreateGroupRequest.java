package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupCreateRequest request;
    public CreateGroupRequest withRequest(openapisdk.models.shared.GroupCreateRequest request) {
        this.request = request;
        return this;
    }
}