package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SandboxOauthSelectAccountsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SandboxOauthSelectAccountsRequest request;
    public SandboxOauthSelectAccountsRequest withRequest(openapisdk.models.shared.SandboxOauthSelectAccountsRequest request) {
        this.request = request;
        return this;
    }
}