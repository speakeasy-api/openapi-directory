package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InviteUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InviteUserRequest request;
    public InviteUserRequest withRequest(openapisdk.models.shared.InviteUserRequest request) {
        this.request = request;
        return this;
    }
}