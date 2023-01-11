package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePasswordSelfRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SelfUpdatePasswordRequest request;
    public UpdatePasswordSelfRequest withRequest(openapisdk.models.shared.SelfUpdatePasswordRequest request) {
        this.request = request;
        return this;
    }
}