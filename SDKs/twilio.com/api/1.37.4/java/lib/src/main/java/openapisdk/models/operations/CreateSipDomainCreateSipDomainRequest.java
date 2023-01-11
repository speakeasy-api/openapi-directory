package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipDomainCreateSipDomainRequest {
    @SpeakeasyMetadata("form:name=ByocTrunkSid")
    public String byocTrunkSid;
    public CreateSipDomainCreateSipDomainRequest withByocTrunkSid(String byocTrunkSid) {
        this.byocTrunkSid = byocTrunkSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DomainName")
    public String domainName;
    public CreateSipDomainCreateSipDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyCallerSid")
    public String emergencyCallerSid;
    public CreateSipDomainCreateSipDomainRequest withEmergencyCallerSid(String emergencyCallerSid) {
        this.emergencyCallerSid = emergencyCallerSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyCallingEnabled")
    public Boolean emergencyCallingEnabled;
    public CreateSipDomainCreateSipDomainRequest withEmergencyCallingEnabled(Boolean emergencyCallingEnabled) {
        this.emergencyCallingEnabled = emergencyCallingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateSipDomainCreateSipDomainRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Secure")
    public Boolean secure;
    public CreateSipDomainCreateSipDomainRequest withSecure(Boolean secure) {
        this.secure = secure;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipRegistration")
    public Boolean sipRegistration;
    public CreateSipDomainCreateSipDomainRequest withSipRegistration(Boolean sipRegistration) {
        this.sipRegistration = sipRegistration;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public CreateSipDomainCreateSipDomainRequest withVoiceFallbackMethod(CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public CreateSipDomainCreateSipDomainRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public CreateSipDomainCreateSipDomainRequestVoiceMethodEnum voiceMethod;
    public CreateSipDomainCreateSipDomainRequest withVoiceMethod(CreateSipDomainCreateSipDomainRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceStatusCallbackMethod")
    public CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum voiceStatusCallbackMethod;
    public CreateSipDomainCreateSipDomainRequest withVoiceStatusCallbackMethod(CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum voiceStatusCallbackMethod) {
        this.voiceStatusCallbackMethod = voiceStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceStatusCallbackUrl")
    public String voiceStatusCallbackUrl;
    public CreateSipDomainCreateSipDomainRequest withVoiceStatusCallbackUrl(String voiceStatusCallbackUrl) {
        this.voiceStatusCallbackUrl = voiceStatusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public CreateSipDomainCreateSipDomainRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}