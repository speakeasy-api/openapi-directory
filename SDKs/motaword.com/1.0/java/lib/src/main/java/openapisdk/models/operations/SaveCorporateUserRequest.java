package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveCorporateUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserUpdateContent request;
    public SaveCorporateUserRequest withRequest(openapisdk.models.shared.UserUpdateContent request) {
        this.request = request;
        return this;
    }
}