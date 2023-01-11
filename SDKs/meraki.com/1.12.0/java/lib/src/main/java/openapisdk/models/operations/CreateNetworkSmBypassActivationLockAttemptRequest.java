package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSmBypassActivationLockAttemptRequest {
    public CreateNetworkSmBypassActivationLockAttemptPathParams pathParams;
    public CreateNetworkSmBypassActivationLockAttemptRequest withPathParams(CreateNetworkSmBypassActivationLockAttemptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSmBypassActivationLockAttemptRequestBody request;
    public CreateNetworkSmBypassActivationLockAttemptRequest withRequest(CreateNetworkSmBypassActivationLockAttemptRequestBody request) {
        this.request = request;
        return this;
    }
}