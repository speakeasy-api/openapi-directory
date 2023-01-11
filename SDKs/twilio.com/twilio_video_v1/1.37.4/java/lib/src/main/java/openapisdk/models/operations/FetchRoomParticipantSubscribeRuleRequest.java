package openapisdk.models.operations;



public class FetchRoomParticipantSubscribeRuleRequest {
    public String serverURL;
    public FetchRoomParticipantSubscribeRuleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRoomParticipantSubscribeRulePathParams pathParams;
    public FetchRoomParticipantSubscribeRuleRequest withPathParams(FetchRoomParticipantSubscribeRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRoomParticipantSubscribeRuleSecurity security;
    public FetchRoomParticipantSubscribeRuleRequest withSecurity(FetchRoomParticipantSubscribeRuleSecurity security) {
        this.security = security;
        return this;
    }
}