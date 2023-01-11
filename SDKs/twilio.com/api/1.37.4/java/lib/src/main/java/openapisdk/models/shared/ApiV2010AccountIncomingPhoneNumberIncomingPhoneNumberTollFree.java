package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_requirements")
    public IncomingPhoneNumberTollFreeEnumAddressRequirementEnum addressRequirements;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withAddressRequirements(IncomingPhoneNumberTollFreeEnumAddressRequirementEnum addressRequirements) {
        this.addressRequirements = addressRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_sid")
    public String addressSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beta")
    public Boolean beta;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_sid")
    public String bundleSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities capabilities;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withCapabilities(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_address_sid")
    public String emergencyAddressSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withEmergencyAddressSid(String emergencyAddressSid) {
        this.emergencyAddressSid = emergencyAddressSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_address_status")
    public IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum emergencyAddressStatus;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withEmergencyAddressStatus(IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum emergencyAddressStatus) {
        this.emergencyAddressStatus = emergencyAddressStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_status")
    public IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum emergencyStatus;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withEmergencyStatus(IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum emergencyStatus) {
        this.emergencyStatus = emergencyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity_sid")
    public String identitySid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withIdentitySid(String identitySid) {
        this.identitySid = identitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public String origin;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_application_sid")
    public String smsApplicationSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum smsFallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withSmsFallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_url")
    public String smsFallbackUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum smsMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withSmsMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_url")
    public String smsUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum statusCallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withStatusCallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trunk_sid")
    public String trunkSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_application_sid")
    public String voiceApplicationSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withVoiceApplicationSid(String voiceApplicationSid) {
        this.voiceApplicationSid = voiceApplicationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_caller_id_lookup")
    public Boolean voiceCallerIdLookup;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum voiceFallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withVoiceFallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_url")
    public String voiceFallbackUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum voiceMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withVoiceMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_receive_mode")
    public IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum voiceReceiveMode;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withVoiceReceiveMode(IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum voiceReceiveMode) {
        this.voiceReceiveMode = voiceReceiveMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_url")
    public String voiceUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}