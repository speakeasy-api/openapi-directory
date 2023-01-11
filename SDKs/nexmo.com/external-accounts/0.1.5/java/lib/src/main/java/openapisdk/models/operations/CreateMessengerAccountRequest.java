package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessengerAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMessengerAccountRequestBody request;
    public CreateMessengerAccountRequest withRequest(CreateMessengerAccountRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateMessengerAccountSecurity security;
    public CreateMessengerAccountRequest withSecurity(CreateMessengerAccountSecurity security) {
        this.security = security;
        return this;
    }
}