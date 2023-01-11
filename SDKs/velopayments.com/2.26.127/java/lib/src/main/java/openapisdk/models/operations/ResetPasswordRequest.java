package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetPasswordRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResetPasswordRequest request;
    public ResetPasswordRequest withRequest(openapisdk.models.shared.ResetPasswordRequest request) {
        this.request = request;
        return this;
    }
}