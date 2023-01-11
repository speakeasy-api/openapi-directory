package openapisdk.models.operations;



public class FetchRoomRecordingRuleRequest {
    public String serverURL;
    public FetchRoomRecordingRuleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRoomRecordingRulePathParams pathParams;
    public FetchRoomRecordingRuleRequest withPathParams(FetchRoomRecordingRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRoomRecordingRuleSecurity security;
    public FetchRoomRecordingRuleRequest withSecurity(FetchRoomRecordingRuleSecurity security) {
        this.security = security;
        return this;
    }
}