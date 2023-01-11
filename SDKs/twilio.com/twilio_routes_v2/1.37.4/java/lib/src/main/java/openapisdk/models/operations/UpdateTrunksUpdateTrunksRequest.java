package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrunksUpdateTrunksRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateTrunksUpdateTrunksRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceRegion")
    public String voiceRegion;
    public UpdateTrunksUpdateTrunksRequest withVoiceRegion(String voiceRegion) {
        this.voiceRegion = voiceRegion;
        return this;
    }
}