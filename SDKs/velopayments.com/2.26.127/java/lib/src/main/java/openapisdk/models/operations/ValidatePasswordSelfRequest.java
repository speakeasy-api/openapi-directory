package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidatePasswordSelfRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PasswordRequest request;
    public ValidatePasswordSelfRequest withRequest(openapisdk.models.shared.PasswordRequest request) {
        this.request = request;
        return this;
    }
}