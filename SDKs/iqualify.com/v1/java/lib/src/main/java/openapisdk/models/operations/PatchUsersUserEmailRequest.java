package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersUserEmailRequest {
    public PatchUsersUserEmailPathParams pathParams;
    public PatchUsersUserEmailRequest withPathParams(PatchUsersUserEmailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.User request;
    public PatchUsersUserEmailRequest withRequest(openapisdk.models.shared.User request) {
        this.request = request;
        return this;
    }
}