package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest {
    @SpeakeasyMetadata("form:name=AddressSid")
    public String addressSid;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ApiVersion")
    public String apiVersion;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=BundleSid")
    public String bundleSid;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyAddressSid")
    public String emergencyAddressSid;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withEmergencyAddressSid(String emergencyAddressSid) {
        this.emergencyAddressSid = emergencyAddressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyStatus")
    public openapisdk.models.shared.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum emergencyStatus;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withEmergencyStatus(openapisdk.models.shared.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum emergencyStatus) {
        this.emergencyStatus = emergencyStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdentitySid")
    public String identitySid;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withIdentitySid(String identitySid) {
        this.identitySid = identitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=PhoneNumber")
    public String phoneNumber;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsApplicationSid")
    public String smsApplicationSid;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum smsFallbackMethod;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withSmsFallbackMethod(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum smsMethod;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withSmsMethod(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withStatusCallbackMethod(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=TrunkSid")
    public String trunkSid;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceApplicationSid")
    public String voiceApplicationSid;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withVoiceApplicationSid(String voiceApplicationSid) {
        this.voiceApplicationSid = voiceApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceCallerIdLookup")
    public Boolean voiceCallerIdLookup;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withVoiceFallbackMethod(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum voiceMethod;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withVoiceMethod(CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceReceiveMode")
    public openapisdk.models.shared.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum voiceReceiveMode;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withVoiceReceiveMode(openapisdk.models.shared.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum voiceReceiveMode) {
        this.voiceReceiveMode = voiceReceiveMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}