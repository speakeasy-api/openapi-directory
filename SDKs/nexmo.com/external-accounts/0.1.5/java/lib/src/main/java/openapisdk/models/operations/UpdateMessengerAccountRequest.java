package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessengerAccountRequest {
    public UpdateMessengerAccountPathParams pathParams;
    public UpdateMessengerAccountRequest withPathParams(UpdateMessengerAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMessengerAccountRequestBody request;
    public UpdateMessengerAccountRequest withRequest(UpdateMessengerAccountRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateMessengerAccountSecurity security;
    public UpdateMessengerAccountRequest withSecurity(UpdateMessengerAccountSecurity security) {
        this.security = security;
        return this;
    }
}