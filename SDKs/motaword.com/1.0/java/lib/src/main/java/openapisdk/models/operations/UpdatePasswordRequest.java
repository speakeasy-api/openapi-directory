package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePasswordRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PasswordUpdateContent request;
    public UpdatePasswordRequest withRequest(openapisdk.models.shared.PasswordUpdateContent request) {
        this.request = request;
        return this;
    }
}