package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetRecoveryCredentialRequest {
    public SetRecoveryCredentialPathParams pathParams;
    public SetRecoveryCredentialRequest withPathParams(SetRecoveryCredentialPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetRecoveryCredentialRequestBody request;
    public SetRecoveryCredentialRequest withRequest(SetRecoveryCredentialRequestBody request) {
        this.request = request;
        return this;
    }
}