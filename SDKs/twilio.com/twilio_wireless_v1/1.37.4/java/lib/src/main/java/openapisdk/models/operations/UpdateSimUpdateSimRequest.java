package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSimUpdateSimRequest {
    @SpeakeasyMetadata("form:name=AccountSid")
    public String accountSid;
    public UpdateSimUpdateSimRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackMethod")
    public UpdateSimUpdateSimRequestCallbackMethodEnum callbackMethod;
    public UpdateSimUpdateSimRequest withCallbackMethod(UpdateSimUpdateSimRequestCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public UpdateSimUpdateSimRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=CommandsCallbackMethod")
    public UpdateSimUpdateSimRequestCommandsCallbackMethodEnum commandsCallbackMethod;
    public UpdateSimUpdateSimRequest withCommandsCallbackMethod(UpdateSimUpdateSimRequestCommandsCallbackMethodEnum commandsCallbackMethod) {
        this.commandsCallbackMethod = commandsCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CommandsCallbackUrl")
    public String commandsCallbackUrl;
    public UpdateSimUpdateSimRequest withCommandsCallbackUrl(String commandsCallbackUrl) {
        this.commandsCallbackUrl = commandsCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateSimUpdateSimRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=RatePlan")
    public String ratePlan;
    public UpdateSimUpdateSimRequest withRatePlan(String ratePlan) {
        this.ratePlan = ratePlan;
        return this;
    }
    @SpeakeasyMetadata("form:name=ResetStatus")
    public openapisdk.models.shared.SimEnumResetStatusEnum resetStatus;
    public UpdateSimUpdateSimRequest withResetStatus(openapisdk.models.shared.SimEnumResetStatusEnum resetStatus) {
        this.resetStatus = resetStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public UpdateSimUpdateSimRequestSmsFallbackMethodEnum smsFallbackMethod;
    public UpdateSimUpdateSimRequest withSmsFallbackMethod(UpdateSimUpdateSimRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public UpdateSimUpdateSimRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public UpdateSimUpdateSimRequestSmsMethodEnum smsMethod;
    public UpdateSimUpdateSimRequest withSmsMethod(UpdateSimUpdateSimRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public UpdateSimUpdateSimRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.SimEnumStatusEnum status;
    public UpdateSimUpdateSimRequest withStatus(openapisdk.models.shared.SimEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateSimUpdateSimRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackMethod")
    public UpdateSimUpdateSimRequestVoiceFallbackMethodEnum voiceFallbackMethod;
    public UpdateSimUpdateSimRequest withVoiceFallbackMethod(UpdateSimUpdateSimRequestVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceFallbackUrl")
    public String voiceFallbackUrl;
    public UpdateSimUpdateSimRequest withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceMethod")
    public UpdateSimUpdateSimRequestVoiceMethodEnum voiceMethod;
    public UpdateSimUpdateSimRequest withVoiceMethod(UpdateSimUpdateSimRequestVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=VoiceUrl")
    public String voiceUrl;
    public UpdateSimUpdateSimRequest withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}