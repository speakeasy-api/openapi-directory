package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest {
    @SpeakeasyMetadata("form:name=AddressSid")
    public String addressSid;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ApiVersion")
    public String apiVersion;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=BundleSid")
    public String bundleSid;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyAddressSid")
    public String emergencyAddressSid;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withEmergencyAddressSid(String emergencyAddressSid) {
        this.emergencyAddressSid = emergencyAddressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyStatus")
    public openapisdk.models.shared.IncomingPhoneNumberLocalEnumEmergencyStatusEnum emergencyStatus;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withEmergencyStatus(openapisdk.models.shared.IncomingPhoneNumberLocalEnumEmergencyStatusEnum emergencyStatus) {
        this.emergencyStatus = emergencyStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdentitySid")
    public String identitySid;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withIdentitySid(String identitySid) {
        this.identitySid = identitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=PhoneNumber")
    public String phoneNumber;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsApplicationSid")
    public String smsApplicationSid;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum smsFallbackMethod;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withSmsFallbackMethod(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum smsMethod;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withSmsMethod(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withStatusCallbackMethod(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=TrunkSid")
    public String trunkSid;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceApplicationSid")
    public String voiceApplicationSid;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withVoiceApplicationSid(String voiceApplicationSid) {
        this.voiceApplicationSid = voiceApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceCallerIdLookup")
    public Boolean voiceCallerIdLookup;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withVoiceFallbackMethod(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum voiceMethod;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withVoiceMethod(CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceReceiveMode")
    public openapisdk.models.shared.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum voiceReceiveMode;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withVoiceReceiveMode(openapisdk.models.shared.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum voiceReceiveMode) {
        this.voiceReceiveMode = voiceReceiveMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}