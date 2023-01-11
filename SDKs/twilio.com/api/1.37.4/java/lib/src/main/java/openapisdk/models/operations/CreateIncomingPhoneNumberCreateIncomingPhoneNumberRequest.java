package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest {
    @SpeakeasyMetadata("form:name=AddressSid")
    public String addressSid;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ApiVersion")
    public String apiVersion;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=AreaCode")
    public String areaCode;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withAreaCode(String areaCode) {
        this.areaCode = areaCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=BundleSid")
    public String bundleSid;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyAddressSid")
    public String emergencyAddressSid;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withEmergencyAddressSid(String emergencyAddressSid) {
        this.emergencyAddressSid = emergencyAddressSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyStatus")
    public openapisdk.models.shared.IncomingPhoneNumberEnumEmergencyStatusEnum emergencyStatus;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withEmergencyStatus(openapisdk.models.shared.IncomingPhoneNumberEnumEmergencyStatusEnum emergencyStatus) {
        this.emergencyStatus = emergencyStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdentitySid")
    public String identitySid;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withIdentitySid(String identitySid) {
        this.identitySid = identitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=PhoneNumber")
    public String phoneNumber;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsApplicationSid")
    public String smsApplicationSid;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum smsFallbackMethod;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withSmsFallbackMethod(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum smsMethod;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withSmsMethod(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withStatusCallbackMethod(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=TrunkSid")
    public String trunkSid;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceApplicationSid")
    public String voiceApplicationSid;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withVoiceApplicationSid(String voiceApplicationSid) {
        this.voiceApplicationSid = voiceApplicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceCallerIdLookup")
    public Boolean voiceCallerIdLookup;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withVoiceFallbackMethod(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum voiceMethod;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withVoiceMethod(CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceReceiveMode")
    public openapisdk.models.shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum voiceReceiveMode;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withVoiceReceiveMode(openapisdk.models.shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum voiceReceiveMode) {
        this.voiceReceiveMode = voiceReceiveMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}