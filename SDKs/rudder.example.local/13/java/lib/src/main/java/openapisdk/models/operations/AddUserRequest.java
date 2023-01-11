package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Users request;
    public AddUserRequest withRequest(openapisdk.models.shared.Users request) {
        this.request = request;
        return this;
    }
}