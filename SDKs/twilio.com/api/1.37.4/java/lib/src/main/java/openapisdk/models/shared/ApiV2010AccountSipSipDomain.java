package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountSipSipDomain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountSipSipDomain withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountSipSipDomain withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_type")
    public String authType;
    public ApiV2010AccountSipSipDomain withAuthType(String authType) {
        this.authType = authType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byoc_trunk_sid")
    public String byocTrunkSid;
    public ApiV2010AccountSipSipDomain withByocTrunkSid(String byocTrunkSid) {
        this.byocTrunkSid = byocTrunkSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountSipSipDomain withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountSipSipDomain withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_name")
    public String domainName;
    public ApiV2010AccountSipSipDomain withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_caller_sid")
    public String emergencyCallerSid;
    public ApiV2010AccountSipSipDomain withEmergencyCallerSid(String emergencyCallerSid) {
        this.emergencyCallerSid = emergencyCallerSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergency_calling_enabled")
    public Boolean emergencyCallingEnabled;
    public ApiV2010AccountSipSipDomain withEmergencyCallingEnabled(Boolean emergencyCallingEnabled) {
        this.emergencyCallingEnabled = emergencyCallingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountSipSipDomain withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secure")
    public Boolean secure;
    public ApiV2010AccountSipSipDomain withSecure(Boolean secure) {
        this.secure = secure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountSipSipDomain withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_registration")
    public Boolean sipRegistration;
    public ApiV2010AccountSipSipDomain withSipRegistration(Boolean sipRegistration) {
        this.sipRegistration = sipRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource_uris")
    public java.util.Map<String, Object> subresourceUris;
    public ApiV2010AccountSipSipDomain withSubresourceUris(java.util.Map<String, Object> subresourceUris) {
        this.subresourceUris = subresourceUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountSipSipDomain withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_method")
    public ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum voiceFallbackMethod;
    public ApiV2010AccountSipSipDomain withVoiceFallbackMethod(ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_url")
    public String voiceFallbackUrl;
    public ApiV2010AccountSipSipDomain withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_method")
    public ApiV2010AccountSipSipDomainVoiceMethodEnum voiceMethod;
    public ApiV2010AccountSipSipDomain withVoiceMethod(ApiV2010AccountSipSipDomainVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_status_callback_method")
    public ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum voiceStatusCallbackMethod;
    public ApiV2010AccountSipSipDomain withVoiceStatusCallbackMethod(ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum voiceStatusCallbackMethod) {
        this.voiceStatusCallbackMethod = voiceStatusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_status_callback_url")
    public String voiceStatusCallbackUrl;
    public ApiV2010AccountSipSipDomain withVoiceStatusCallbackUrl(String voiceStatusCallbackUrl) {
        this.voiceStatusCallbackUrl = voiceStatusCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_url")
    public String voiceUrl;
    public ApiV2010AccountSipSipDomain withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}