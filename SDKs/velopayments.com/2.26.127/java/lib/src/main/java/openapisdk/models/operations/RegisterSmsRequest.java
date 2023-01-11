package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterSmsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterSmsRequest request;
    public RegisterSmsRequest withRequest(openapisdk.models.shared.RegisterSmsRequest request) {
        this.request = request;
        return this;
    }
}