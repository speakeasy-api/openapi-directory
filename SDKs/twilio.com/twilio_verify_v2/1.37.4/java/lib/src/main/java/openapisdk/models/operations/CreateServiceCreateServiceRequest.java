package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceCreateServiceRequest {
    @SpeakeasyMetadata("form:name=CodeLength")
    public Long codeLength;
    public CreateServiceCreateServiceRequest withCodeLength(Long codeLength) {
        this.codeLength = codeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomCodeEnabled")
    public Boolean customCodeEnabled;
    public CreateServiceCreateServiceRequest withCustomCodeEnabled(Boolean customCodeEnabled) {
        this.customCodeEnabled = customCodeEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultTemplateSid")
    public String defaultTemplateSid;
    public CreateServiceCreateServiceRequest withDefaultTemplateSid(String defaultTemplateSid) {
        this.defaultTemplateSid = defaultTemplateSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DoNotShareWarningEnabled")
    public Boolean doNotShareWarningEnabled;
    public CreateServiceCreateServiceRequest withDoNotShareWarningEnabled(Boolean doNotShareWarningEnabled) {
        this.doNotShareWarningEnabled = doNotShareWarningEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DtmfInputRequired")
    public Boolean dtmfInputRequired;
    public CreateServiceCreateServiceRequest withDtmfInputRequired(Boolean dtmfInputRequired) {
        this.dtmfInputRequired = dtmfInputRequired;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceCreateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=LookupEnabled")
    public Boolean lookupEnabled;
    public CreateServiceCreateServiceRequest withLookupEnabled(Boolean lookupEnabled) {
        this.lookupEnabled = lookupEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=Psd2Enabled")
    public Boolean psd2Enabled;
    public CreateServiceCreateServiceRequest withPsd2Enabled(Boolean psd2Enabled) {
        this.psd2Enabled = psd2Enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=Push.ApnCredentialSid")
    public String pushApnCredentialSid;
    public CreateServiceCreateServiceRequest withPushApnCredentialSid(String pushApnCredentialSid) {
        this.pushApnCredentialSid = pushApnCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Push.FcmCredentialSid")
    public String pushFcmCredentialSid;
    public CreateServiceCreateServiceRequest withPushFcmCredentialSid(String pushFcmCredentialSid) {
        this.pushFcmCredentialSid = pushFcmCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Push.IncludeDate")
    public Boolean pushIncludeDate;
    public CreateServiceCreateServiceRequest withPushIncludeDate(Boolean pushIncludeDate) {
        this.pushIncludeDate = pushIncludeDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=SkipSmsToLandlines")
    public Boolean skipSmsToLandlines;
    public CreateServiceCreateServiceRequest withSkipSmsToLandlines(Boolean skipSmsToLandlines) {
        this.skipSmsToLandlines = skipSmsToLandlines;
        return this;
    }
    @SpeakeasyMetadata("form:name=Totp.CodeLength")
    public Long totpCodeLength;
    public CreateServiceCreateServiceRequest withTotpCodeLength(Long totpCodeLength) {
        this.totpCodeLength = totpCodeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=Totp.Issuer")
    public String totpIssuer;
    public CreateServiceCreateServiceRequest withTotpIssuer(String totpIssuer) {
        this.totpIssuer = totpIssuer;
        return this;
    }
    @SpeakeasyMetadata("form:name=Totp.Skew")
    public Long totpSkew;
    public CreateServiceCreateServiceRequest withTotpSkew(Long totpSkew) {
        this.totpSkew = totpSkew;
        return this;
    }
    @SpeakeasyMetadata("form:name=Totp.TimeStep")
    public Long totpTimeStep;
    public CreateServiceCreateServiceRequest withTotpTimeStep(Long totpTimeStep) {
        this.totpTimeStep = totpTimeStep;
        return this;
    }
    @SpeakeasyMetadata("form:name=TtsName")
    public String ttsName;
    public CreateServiceCreateServiceRequest withTtsName(String ttsName) {
        this.ttsName = ttsName;
        return this;
    }
}