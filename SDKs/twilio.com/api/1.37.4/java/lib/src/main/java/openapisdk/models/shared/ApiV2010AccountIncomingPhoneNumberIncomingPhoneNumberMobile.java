package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_requirements")
    public IncomingPhoneNumberMobileEnumAddressRequirementEnum addressRequirements;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withAddressRequirements(IncomingPhoneNumberMobileEnumAddressRequirementEnum addressRequirements) {
        this.addressRequirements = addressRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_sid")
    public String addressSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beta")
    public Boolean beta;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_sid")
    public String bundleSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities capabilities;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withCapabilities(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_address_sid")
    public String emergencyAddressSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withEmergencyAddressSid(String emergencyAddressSid) {
        this.emergencyAddressSid = emergencyAddressSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_address_status")
    public IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum emergencyAddressStatus;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withEmergencyAddressStatus(IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum emergencyAddressStatus) {
        this.emergencyAddressStatus = emergencyAddressStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_status")
    public IncomingPhoneNumberMobileEnumEmergencyStatusEnum emergencyStatus;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withEmergencyStatus(IncomingPhoneNumberMobileEnumEmergencyStatusEnum emergencyStatus) {
        this.emergencyStatus = emergencyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity_sid")
    public String identitySid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withIdentitySid(String identitySid) {
        this.identitySid = identitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public String origin;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_application_sid")
    public String smsApplicationSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withSmsApplicationSid(String smsApplicationSid) {
        this.smsApplicationSid = smsApplicationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum smsFallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withSmsFallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_url")
    public String smsFallbackUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum smsMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withSmsMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_url")
    public String smsUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum statusCallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withStatusCallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trunk_sid")
    public String trunkSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_application_sid")
    public String voiceApplicationSid;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withVoiceApplicationSid(String voiceApplicationSid) {
        this.voiceApplicationSid = voiceApplicationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_caller_id_lookup")
    public Boolean voiceCallerIdLookup;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum voiceFallbackMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withVoiceFallbackMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_url")
    public String voiceFallbackUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_method")
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum voiceMethod;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withVoiceMethod(ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_receive_mode")
    public IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum voiceReceiveMode;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withVoiceReceiveMode(IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum voiceReceiveMode) {
        this.voiceReceiveMode = voiceReceiveMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_url")
    public String voiceUrl;
    public ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}