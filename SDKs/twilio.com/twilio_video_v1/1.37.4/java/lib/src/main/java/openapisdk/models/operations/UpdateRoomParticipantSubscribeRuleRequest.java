package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomParticipantSubscribeRuleRequest {
    public String serverURL;
    public UpdateRoomParticipantSubscribeRuleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRoomParticipantSubscribeRulePathParams pathParams;
    public UpdateRoomParticipantSubscribeRuleRequest withPathParams(UpdateRoomParticipantSubscribeRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest request;
    public UpdateRoomParticipantSubscribeRuleRequest withRequest(UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRoomParticipantSubscribeRuleSecurity security;
    public UpdateRoomParticipantSubscribeRuleRequest withSecurity(UpdateRoomParticipantSubscribeRuleSecurity security) {
        this.security = security;
        return this;
    }
}