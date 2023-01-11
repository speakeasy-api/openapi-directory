package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipDomainUpdateSipDomainRequest {
    @SpeakeasyMetadata("form:name=ByocTrunkSid")
    public String byocTrunkSid;
    public UpdateSipDomainUpdateSipDomainRequest withByocTrunkSid(String byocTrunkSid) {
        this.byocTrunkSid = byocTrunkSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DomainName")
    public String domainName;
    public UpdateSipDomainUpdateSipDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyCallerSid")
    public String emergencyCallerSid;
    public UpdateSipDomainUpdateSipDomainRequest withEmergencyCallerSid(String emergencyCallerSid) {
        this.emergencyCallerSid = emergencyCallerSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyCallingEnabled")
    public Boolean emergencyCallingEnabled;
    public UpdateSipDomainUpdateSipDomainRequest withEmergencyCallingEnabled(Boolean emergencyCallingEnabled) {
        this.emergencyCallingEnabled = emergencyCallingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateSipDomainUpdateSipDomainRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Secure")
    public Boolean secure;
    public UpdateSipDomainUpdateSipDomainRequest withSecure(Boolean secure) {
        this.secure = secure;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipRegistration")
    public Boolean sipRegistration;
    public UpdateSipDomainUpdateSipDomainRequest withSipRegistration(Boolean sipRegistration) {
        this.sipRegistration = sipRegistration;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public UpdateSipDomainUpdateSipDomainRequest withVoiceFallbackMethod(UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public UpdateSipDomainUpdateSipDomainRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum voiceMethod;
    public UpdateSipDomainUpdateSipDomainRequest withVoiceMethod(UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceStatusCallbackMethod")
    public UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum voiceStatusCallbackMethod;
    public UpdateSipDomainUpdateSipDomainRequest withVoiceStatusCallbackMethod(UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum voiceStatusCallbackMethod) {
        this.voiceStatusCallbackMethod = voiceStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceStatusCallbackUrl")
    public String voiceStatusCallbackUrl;
    public UpdateSipDomainUpdateSipDomainRequest withVoiceStatusCallbackUrl(String voiceStatusCallbackUrl) {
        this.voiceStatusCallbackUrl = voiceStatusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public UpdateSipDomainUpdateSipDomainRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}