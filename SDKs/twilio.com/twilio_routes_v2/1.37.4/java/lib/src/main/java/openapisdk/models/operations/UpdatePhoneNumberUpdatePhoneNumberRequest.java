package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneNumberUpdatePhoneNumberRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdatePhoneNumberUpdatePhoneNumberRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceRegion")
    public String voiceRegion;
    public UpdatePhoneNumberUpdatePhoneNumberRequest withVoiceRegion(String voiceRegion) {
        this.voiceRegion = voiceRegion;
        return this;
    }
}