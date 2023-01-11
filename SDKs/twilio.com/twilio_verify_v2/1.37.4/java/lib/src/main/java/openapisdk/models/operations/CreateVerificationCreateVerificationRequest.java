package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVerificationCreateVerificationRequest {
    @SpeakeasyMetadata("form:name=Amount")
    public String amount;
    public CreateVerificationCreateVerificationRequest withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("form:name=AppHash")
    public String appHash;
    public CreateVerificationCreateVerificationRequest withAppHash(String appHash) {
        this.appHash = appHash;
        return this;
    }
    @SpeakeasyMetadata("form:name=Channel")
    public String channel;
    public CreateVerificationCreateVerificationRequest withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChannelConfiguration")
    public Object channelConfiguration;
    public CreateVerificationCreateVerificationRequest withChannelConfiguration(Object channelConfiguration) {
        this.channelConfiguration = channelConfiguration;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomCode")
    public String customCode;
    public CreateVerificationCreateVerificationRequest withCustomCode(String customCode) {
        this.customCode = customCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomFriendlyName")
    public String customFriendlyName;
    public CreateVerificationCreateVerificationRequest withCustomFriendlyName(String customFriendlyName) {
        this.customFriendlyName = customFriendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomMessage")
    public String customMessage;
    public CreateVerificationCreateVerificationRequest withCustomMessage(String customMessage) {
        this.customMessage = customMessage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Locale")
    public String locale;
    public CreateVerificationCreateVerificationRequest withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("form:name=Payee")
    public String payee;
    public CreateVerificationCreateVerificationRequest withPayee(String payee) {
        this.payee = payee;
        return this;
    }
    @SpeakeasyMetadata("form:name=RateLimits")
    public Object rateLimits;
    public CreateVerificationCreateVerificationRequest withRateLimits(Object rateLimits) {
        this.rateLimits = rateLimits;
        return this;
    }
    @SpeakeasyMetadata("form:name=SendDigits")
    public String sendDigits;
    public CreateVerificationCreateVerificationRequest withSendDigits(String sendDigits) {
        this.sendDigits = sendDigits;
        return this;
    }
    @SpeakeasyMetadata("form:name=TemplateCustomSubstitutions")
    public String templateCustomSubstitutions;
    public CreateVerificationCreateVerificationRequest withTemplateCustomSubstitutions(String templateCustomSubstitutions) {
        this.templateCustomSubstitutions = templateCustomSubstitutions;
        return this;
    }
    @SpeakeasyMetadata("form:name=TemplateSid")
    public String templateSid;
    public CreateVerificationCreateVerificationRequest withTemplateSid(String templateSid) {
        this.templateSid = templateSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public CreateVerificationCreateVerificationRequest withTo(String to) {
        this.to = to;
        return this;
    }
}