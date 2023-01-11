package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserUpdateContent request;
    public UpdateMeRequest withRequest(openapisdk.models.shared.UserUpdateContent request) {
        this.request = request;
        return this;
    }
}