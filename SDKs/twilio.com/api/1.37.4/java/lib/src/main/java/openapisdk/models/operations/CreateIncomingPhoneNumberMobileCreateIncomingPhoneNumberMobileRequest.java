package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest {
    @SpeakeasyMetadata("form:name=AddressSid")
    public String addressSid;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ApiVersion")
    public String apiVersion;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=BundleSid")
    public String bundleSid;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyAddressSid")
    public String emergencyAddressSid;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withEmergencyAddressSid(String emergencyAddressSid) {
        this.emergencyAddressSid = emergencyAddressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyStatus")
    public openapisdk.models.shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum emergencyStatus;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withEmergencyStatus(openapisdk.models.shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum emergencyStatus) {
        this.emergencyStatus = emergencyStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdentitySid")
    public String identitySid;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withIdentitySid(String identitySid) {
        this.identitySid = identitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=PhoneNumber")
    public String phoneNumber;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsApplicationSid")
    public String smsApplicationSid;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum smsFallbackMethod;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withSmsFallbackMethod(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum smsMethod;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withSmsMethod(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withStatusCallbackMethod(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=TrunkSid")
    public String trunkSid;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceApplicationSid")
    public String voiceApplicationSid;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withVoiceApplicationSid(String voiceApplicationSid) {
        this.voiceApplicationSid = voiceApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceCallerIdLookup")
    public Boolean voiceCallerIdLookup;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withVoiceFallbackMethod(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum voiceMethod;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withVoiceMethod(CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceReceiveMode")
    public openapisdk.models.shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum voiceReceiveMode;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withVoiceReceiveMode(openapisdk.models.shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum voiceReceiveMode) {
        this.voiceReceiveMode = voiceReceiveMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}