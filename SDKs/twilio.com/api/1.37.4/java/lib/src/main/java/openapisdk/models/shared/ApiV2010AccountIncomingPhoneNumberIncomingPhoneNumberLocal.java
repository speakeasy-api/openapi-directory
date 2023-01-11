package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_requirements")
    public IncomingPhoneNumberLocalEnumAddressRequirementEnum addressRequirements;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withAddressRequirements(IncomingPhoneNumberLocalEnumAddressRequirementEnum addressRequirements) {
        this.addressRequirements = addressRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_sid")
    public String addressSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beta")
    public Boolean beta;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_sid")
    public String bundleSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities capabilities;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withCapabilities(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_address_sid")
    public String emergencyAddressSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withEmergencyAddressSid(String emergencyAddressSid) {
        this.emergencyAddressSid = emergencyAddressSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_address_status")
    public IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum emergencyAddressStatus;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withEmergencyAddressStatus(IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum emergencyAddressStatus) {
        this.emergencyAddressStatus = emergencyAddressStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_status")
    public IncomingPhoneNumberLocalEnumEmergencyStatusEnum emergencyStatus;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withEmergencyStatus(IncomingPhoneNumberLocalEnumEmergencyStatusEnum emergencyStatus) {
        this.emergencyStatus = emergencyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity_sid")
    public String identitySid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withIdentitySid(String identitySid) {
        this.identitySid = identitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public String origin;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_application_sid")
    public String smsApplicationSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum smsFallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withSmsFallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_url")
    public String smsFallbackUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum smsMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withSmsMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_url")
    public String smsUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum statusCallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withStatusCallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trunk_sid")
    public String trunkSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_application_sid")
    public String voiceApplicationSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withVoiceApplicationSid(String voiceApplicationSid) {
        this.voiceApplicationSid = voiceApplicationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_caller_id_lookup")
    public Boolean voiceCallerIdLookup;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum voiceFallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withVoiceFallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_url")
    public String voiceFallbackUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum voiceMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withVoiceMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_receive_mode")
    public IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum voiceReceiveMode;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withVoiceReceiveMode(IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum voiceReceiveMode) {
        this.voiceReceiveMode = voiceReceiveMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_url")
    public String voiceUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}