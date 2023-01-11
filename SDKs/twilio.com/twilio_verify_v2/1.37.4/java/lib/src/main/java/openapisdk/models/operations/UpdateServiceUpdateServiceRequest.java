package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUpdateServiceRequest {
    @SpeakeasyMetadata("form:name=CodeLength")
    public Long codeLength;
    public UpdateServiceUpdateServiceRequest withCodeLength(Long codeLength) {
        this.codeLength = codeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomCodeEnabled")
    public Boolean customCodeEnabled;
    public UpdateServiceUpdateServiceRequest withCustomCodeEnabled(Boolean customCodeEnabled) {
        this.customCodeEnabled = customCodeEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultTemplateSid")
    public String defaultTemplateSid;
    public UpdateServiceUpdateServiceRequest withDefaultTemplateSid(String defaultTemplateSid) {
        this.defaultTemplateSid = defaultTemplateSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DoNotShareWarningEnabled")
    public Boolean doNotShareWarningEnabled;
    public UpdateServiceUpdateServiceRequest withDoNotShareWarningEnabled(Boolean doNotShareWarningEnabled) {
        this.doNotShareWarningEnabled = doNotShareWarningEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DtmfInputRequired")
    public Boolean dtmfInputRequired;
    public UpdateServiceUpdateServiceRequest withDtmfInputRequired(Boolean dtmfInputRequired) {
        this.dtmfInputRequired = dtmfInputRequired;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateServiceUpdateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=LookupEnabled")
    public Boolean lookupEnabled;
    public UpdateServiceUpdateServiceRequest withLookupEnabled(Boolean lookupEnabled) {
        this.lookupEnabled = lookupEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=Psd2Enabled")
    public Boolean psd2Enabled;
    public UpdateServiceUpdateServiceRequest withPsd2Enabled(Boolean psd2Enabled) {
        this.psd2Enabled = psd2Enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=Push.ApnCredentialSid")
    public String pushApnCredentialSid;
    public UpdateServiceUpdateServiceRequest withPushApnCredentialSid(String pushApnCredentialSid) {
        this.pushApnCredentialSid = pushApnCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Push.FcmCredentialSid")
    public String pushFcmCredentialSid;
    public UpdateServiceUpdateServiceRequest withPushFcmCredentialSid(String pushFcmCredentialSid) {
        this.pushFcmCredentialSid = pushFcmCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Push.IncludeDate")
    public Boolean pushIncludeDate;
    public UpdateServiceUpdateServiceRequest withPushIncludeDate(Boolean pushIncludeDate) {
        this.pushIncludeDate = pushIncludeDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=SkipSmsToLandlines")
    public Boolean skipSmsToLandlines;
    public UpdateServiceUpdateServiceRequest withSkipSmsToLandlines(Boolean skipSmsToLandlines) {
        this.skipSmsToLandlines = skipSmsToLandlines;
        return this;
    }
    @SpeakeasyMetadata("form:name=Totp.CodeLength")
    public Long totpCodeLength;
    public UpdateServiceUpdateServiceRequest withTotpCodeLength(Long totpCodeLength) {
        this.totpCodeLength = totpCodeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=Totp.Issuer")
    public String totpIssuer;
    public UpdateServiceUpdateServiceRequest withTotpIssuer(String totpIssuer) {
        this.totpIssuer = totpIssuer;
        return this;
    }
    @SpeakeasyMetadata("form:name=Totp.Skew")
    public Long totpSkew;
    public UpdateServiceUpdateServiceRequest withTotpSkew(Long totpSkew) {
        this.totpSkew = totpSkew;
        return this;
    }
    @SpeakeasyMetadata("form:name=Totp.TimeStep")
    public Long totpTimeStep;
    public UpdateServiceUpdateServiceRequest withTotpTimeStep(Long totpTimeStep) {
        this.totpTimeStep = totpTimeStep;
        return this;
    }
    @SpeakeasyMetadata("form:name=TtsName")
    public String ttsName;
    public UpdateServiceUpdateServiceRequest withTtsName(String ttsName) {
        this.ttsName = ttsName;
        return this;
    }
}