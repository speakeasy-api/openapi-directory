package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountApplication withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountApplication withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountApplication withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountApplication withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountApplication withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_status_callback")
    public String messageStatusCallback;
    public ApiV2010AccountApplication withMessageStatusCallback(String messageStatusCallback) {
        this.messageStatusCallback = messageStatusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ApiV2010AccountApplication withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_method")
    public ApiV2010AccountApplicationSmsFallbackMethodEnum smsFallbackMethod;
    public ApiV2010AccountApplication withSmsFallbackMethod(ApiV2010AccountApplicationSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_url")
    public String smsFallbackUrl;
    public ApiV2010AccountApplication withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_method")
    public ApiV2010AccountApplicationSmsMethodEnum smsMethod;
    public ApiV2010AccountApplication withSmsMethod(ApiV2010AccountApplicationSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_status_callback")
    public String smsStatusCallback;
    public ApiV2010AccountApplication withSmsStatusCallback(String smsStatusCallback) {
        this.smsStatusCallback = smsStatusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_url")
    public String smsUrl;
    public ApiV2010AccountApplication withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback")
    public String statusCallback;
    public ApiV2010AccountApplication withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_callback_method")
    public ApiV2010AccountApplicationStatusCallbackMethodEnum statusCallbackMethod;
    public ApiV2010AccountApplication withStatusCallbackMethod(ApiV2010AccountApplicationStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountApplication withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_caller_id_lookup")
    public Boolean voiceCallerIdLookup;
    public ApiV2010AccountApplication withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_method")
    public ApiV2010AccountApplicationVoiceFallbackMethodEnum voiceFallbackMethod;
    public ApiV2010AccountApplication withVoiceFallbackMethod(ApiV2010AccountApplicationVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_url")
    public String voiceFallbackUrl;
    public ApiV2010AccountApplication withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_method")
    public ApiV2010AccountApplicationVoiceMethodEnum voiceMethod;
    public ApiV2010AccountApplication withVoiceMethod(ApiV2010AccountApplicationVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_url")
    public String voiceUrl;
    public ApiV2010AccountApplication withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}