package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendPayeeInviteV4Request {
    public ResendPayeeInviteV4PathParams pathParams;
    public ResendPayeeInviteV4Request withPathParams(ResendPayeeInviteV4PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InvitePayeeRequest2 request;
    public ResendPayeeInviteV4Request withRequest(openapisdk.models.shared.InvitePayeeRequest2 request) {
        this.request = request;
        return this;
    }
}