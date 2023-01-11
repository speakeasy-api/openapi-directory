package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateByocTrunkCreateByocTrunkRequest {
    @SpeakeasyMetadata("form:name=CnamLookupEnabled")
    public Boolean cnamLookupEnabled;
    public CreateByocTrunkCreateByocTrunkRequest withCnamLookupEnabled(Boolean cnamLookupEnabled) {
        this.cnamLookupEnabled = cnamLookupEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConnectionPolicySid")
    public String connectionPolicySid;
    public CreateByocTrunkCreateByocTrunkRequest withConnectionPolicySid(String connectionPolicySid) {
        this.connectionPolicySid = connectionPolicySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateByocTrunkCreateByocTrunkRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=FromDomainSid")
    public String fromDomainSid;
    public CreateByocTrunkCreateByocTrunkRequest withFromDomainSid(String fromDomainSid) {
        this.fromDomainSid = fromDomainSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateByocTrunkCreateByocTrunkRequest withStatusCallbackMethod(CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackUrl")
    public String statusCallbackUrl;
    public CreateByocTrunkCreateByocTrunkRequest withStatusCallbackUrl(String statusCallbackUrl) {
        this.statusCallbackUrl = statusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public CreateByocTrunkCreateByocTrunkRequest withVoiceFallbackMethod(CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public CreateByocTrunkCreateByocTrunkRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum voiceMethod;
    public CreateByocTrunkCreateByocTrunkRequest withVoiceMethod(CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public CreateByocTrunkCreateByocTrunkRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}