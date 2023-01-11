package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest {
    @SpeakeasyMetadata("form:name=AccountSid")
    public String accountSid;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=AddressSid")
    public String addressSid;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ApiVersion")
    public String apiVersion;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=BundleSid")
    public String bundleSid;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyAddressSid")
    public String emergencyAddressSid;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withEmergencyAddressSid(String emergencyAddressSid) {
        this.emergencyAddressSid = emergencyAddressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyStatus")
    public openapisdk.models.shared.IncomingPhoneNumberEnumEmergencyStatusEnum emergencyStatus;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withEmergencyStatus(openapisdk.models.shared.IncomingPhoneNumberEnumEmergencyStatusEnum emergencyStatus) {
        this.emergencyStatus = emergencyStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdentitySid")
    public String identitySid;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withIdentitySid(String identitySid) {
        this.identitySid = identitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsApplicationSid")
    public String smsApplicationSid;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum smsFallbackMethod;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withSmsFallbackMethod(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum smsMethod;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withSmsMethod(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum statusCallbackMethod;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withStatusCallbackMethod(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=TrunkSid")
    public String trunkSid;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceApplicationSid")
    public String voiceApplicationSid;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withVoiceApplicationSid(String voiceApplicationSid) {
        this.voiceApplicationSid = voiceApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceCallerIdLookup")
    public Boolean voiceCallerIdLookup;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withVoiceFallbackMethod(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum voiceMethod;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withVoiceMethod(UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceReceiveMode")
    public openapisdk.models.shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum voiceReceiveMode;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withVoiceReceiveMode(openapisdk.models.shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum voiceReceiveMode) {
        this.voiceReceiveMode = voiceReceiveMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}