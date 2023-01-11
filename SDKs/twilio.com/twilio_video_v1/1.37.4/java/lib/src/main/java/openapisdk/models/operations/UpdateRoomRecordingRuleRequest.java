package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomRecordingRuleRequest {
    public String serverURL;
    public UpdateRoomRecordingRuleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRoomRecordingRulePathParams pathParams;
    public UpdateRoomRecordingRuleRequest withPathParams(UpdateRoomRecordingRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest request;
    public UpdateRoomRecordingRuleRequest withRequest(UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRoomRecordingRuleSecurity security;
    public UpdateRoomRecordingRuleRequest withSecurity(UpdateRoomRecordingRuleSecurity security) {
        this.security = security;
        return this;
    }
}