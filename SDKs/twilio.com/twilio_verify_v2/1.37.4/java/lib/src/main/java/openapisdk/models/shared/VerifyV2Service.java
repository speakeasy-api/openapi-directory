package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VerifyV2Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VerifyV2Service withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code_length")
    public Long codeLength;
    public VerifyV2Service withCodeLength(Long codeLength) {
        this.codeLength = codeLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_code_enabled")
    public Boolean customCodeEnabled;
    public VerifyV2Service withCustomCodeEnabled(Boolean customCodeEnabled) {
        this.customCodeEnabled = customCodeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public VerifyV2Service withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public VerifyV2Service withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_template_sid")
    public String defaultTemplateSid;
    public VerifyV2Service withDefaultTemplateSid(String defaultTemplateSid) {
        this.defaultTemplateSid = defaultTemplateSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("do_not_share_warning_enabled")
    public Boolean doNotShareWarningEnabled;
    public VerifyV2Service withDoNotShareWarningEnabled(Boolean doNotShareWarningEnabled) {
        this.doNotShareWarningEnabled = doNotShareWarningEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dtmf_input_required")
    public Boolean dtmfInputRequired;
    public VerifyV2Service withDtmfInputRequired(Boolean dtmfInputRequired) {
        this.dtmfInputRequired = dtmfInputRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public VerifyV2Service withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public VerifyV2Service withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookup_enabled")
    public Boolean lookupEnabled;
    public VerifyV2Service withLookupEnabled(Boolean lookupEnabled) {
        this.lookupEnabled = lookupEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psd2_enabled")
    public Boolean psd2Enabled;
    public VerifyV2Service withPsd2Enabled(Boolean psd2Enabled) {
        this.psd2Enabled = psd2Enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("push")
    public Object push;
    public VerifyV2Service withPush(Object push) {
        this.push = push;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public VerifyV2Service withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_sms_to_landlines")
    public Boolean skipSmsToLandlines;
    public VerifyV2Service withSkipSmsToLandlines(Boolean skipSmsToLandlines) {
        this.skipSmsToLandlines = skipSmsToLandlines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totp")
    public Object totp;
    public VerifyV2Service withTotp(Object totp) {
        this.totp = totp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tts_name")
    public String ttsName;
    public VerifyV2Service withTtsName(String ttsName) {
        this.ttsName = ttsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VerifyV2Service withUrl(String url) {
        this.url = url;
        return this;
    }
}