package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApplicationUpdateApplicationRequest {
    @SpeakeasyMetadata("form:name=ApiVersion")
    public String apiVersion;
    public UpdateApplicationUpdateApplicationRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateApplicationUpdateApplicationRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessageStatusCallback")
    public String messageStatusCallback;
    public UpdateApplicationUpdateApplicationRequest withMessageStatusCallback(String messageStatusCallback) {
        this.messageStatusCallback = messageStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum smsFallbackMethod;
    public UpdateApplicationUpdateApplicationRequest withSmsFallbackMethod(UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public UpdateApplicationUpdateApplicationRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public UpdateApplicationUpdateApplicationRequestSmsMethodEnum smsMethod;
    public UpdateApplicationUpdateApplicationRequest withSmsMethod(UpdateApplicationUpdateApplicationRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsStatusCallback")
    public String smsStatusCallback;
    public UpdateApplicationUpdateApplicationRequest withSmsStatusCallback(String smsStatusCallback) {
        this.smsStatusCallback = smsStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public UpdateApplicationUpdateApplicationRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateApplicationUpdateApplicationRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum statusCallbackMethod;
    public UpdateApplicationUpdateApplicationRequest withStatusCallbackMethod(UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceCallerIdLookup")
    public Boolean voiceCallerIdLookup;
    public UpdateApplicationUpdateApplicationRequest withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public UpdateApplicationUpdateApplicationRequest withVoiceFallbackMethod(UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public UpdateApplicationUpdateApplicationRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public UpdateApplicationUpdateApplicationRequestVoiceMethodEnum voiceMethod;
    public UpdateApplicationUpdateApplicationRequest withVoiceMethod(UpdateApplicationUpdateApplicationRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public UpdateApplicationUpdateApplicationRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}