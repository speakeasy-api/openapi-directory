package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipDomainUpdateSipDomainRequest {
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateSipDomainUpdateSipDomainRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceRegion")
    public String voiceRegion;
    public UpdateSipDomainUpdateSipDomainRequest withVoiceRegion(String voiceRegion) {
        this.voiceRegion = voiceRegion;
        return this;
    }
}