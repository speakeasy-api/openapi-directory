package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateByocTrunkUpdateByocTrunkRequest {
    @SpeakeasyMetadata("form:name=CnamLookupEnabled")
    public Boolean cnamLookupEnabled;
    public UpdateByocTrunkUpdateByocTrunkRequest withCnamLookupEnabled(Boolean cnamLookupEnabled) {
        this.cnamLookupEnabled = cnamLookupEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConnectionPolicySid")
    public String connectionPolicySid;
    public UpdateByocTrunkUpdateByocTrunkRequest withConnectionPolicySid(String connectionPolicySid) {
        this.connectionPolicySid = connectionPolicySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateByocTrunkUpdateByocTrunkRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=FromDomainSid")
    public String fromDomainSid;
    public UpdateByocTrunkUpdateByocTrunkRequest withFromDomainSid(String fromDomainSid) {
        this.fromDomainSid = fromDomainSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum statusCallbackMethod;
    public UpdateByocTrunkUpdateByocTrunkRequest withStatusCallbackMethod(UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackUrl")
    public String statusCallbackUrl;
    public UpdateByocTrunkUpdateByocTrunkRequest withStatusCallbackUrl(String statusCallbackUrl) {
        this.statusCallbackUrl = statusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public UpdateByocTrunkUpdateByocTrunkRequest withVoiceFallbackMethod(UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public UpdateByocTrunkUpdateByocTrunkRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum voiceMethod;
    public UpdateByocTrunkUpdateByocTrunkRequest withVoiceMethod(UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public UpdateByocTrunkUpdateByocTrunkRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}