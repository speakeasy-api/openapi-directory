package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationCreateApplicationRequest {
    @SpeakeasyMetadata("form:name=ApiVersion")
    public String apiVersion;
    public CreateApplicationCreateApplicationRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateApplicationCreateApplicationRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessageStatusCallback")
    public String messageStatusCallback;
    public CreateApplicationCreateApplicationRequest withMessageStatusCallback(String messageStatusCallback) {
        this.messageStatusCallback = messageStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum smsFallbackMethod;
    public CreateApplicationCreateApplicationRequest withSmsFallbackMethod(CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public CreateApplicationCreateApplicationRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public CreateApplicationCreateApplicationRequestSmsMethodEnum smsMethod;
    public CreateApplicationCreateApplicationRequest withSmsMethod(CreateApplicationCreateApplicationRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsStatusCallback")
    public String smsStatusCallback;
    public CreateApplicationCreateApplicationRequest withSmsStatusCallback(String smsStatusCallback) {
        this.smsStatusCallback = smsStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public CreateApplicationCreateApplicationRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateApplicationCreateApplicationRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateApplicationCreateApplicationRequest withStatusCallbackMethod(CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceCallerIdLookup")
    public Boolean voiceCallerIdLookup;
    public CreateApplicationCreateApplicationRequest withVoiceCallerIdLookup(Boolean voiceCallerIdLookup) {
        this.voiceCallerIdLookup = voiceCallerIdLookup;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public CreateApplicationCreateApplicationRequest withVoiceFallbackMethod(CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public CreateApplicationCreateApplicationRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public CreateApplicationCreateApplicationRequestVoiceMethodEnum voiceMethod;
    public CreateApplicationCreateApplicationRequest withVoiceMethod(CreateApplicationCreateApplicationRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public CreateApplicationCreateApplicationRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}