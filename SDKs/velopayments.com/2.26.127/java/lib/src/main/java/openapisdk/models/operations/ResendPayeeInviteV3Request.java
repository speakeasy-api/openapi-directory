package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendPayeeInviteV3Request {
    public ResendPayeeInviteV3PathParams pathParams;
    public ResendPayeeInviteV3Request withPathParams(ResendPayeeInviteV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InvitePayeeRequest request;
    public ResendPayeeInviteV3Request withRequest(openapisdk.models.shared.InvitePayeeRequest request) {
        this.request = request;
        return this;
    }
}