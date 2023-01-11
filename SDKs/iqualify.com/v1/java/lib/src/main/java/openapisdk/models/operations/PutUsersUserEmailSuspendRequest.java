package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersUserEmailSuspendRequest {
    public PutUsersUserEmailSuspendPathParams pathParams;
    public PutUsersUserEmailSuspendRequest withPathParams(PutUsersUserEmailSuspendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SuspendedRequest request;
    public PutUsersUserEmailSuspendRequest withRequest(openapisdk.models.shared.SuspendedRequest request) {
        this.request = request;
        return this;
    }
}