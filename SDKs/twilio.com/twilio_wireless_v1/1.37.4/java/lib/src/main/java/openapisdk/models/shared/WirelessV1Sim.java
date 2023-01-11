package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class WirelessV1Sim {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public WirelessV1Sim withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands_callback_method")
    public WirelessV1SimCommandsCallbackMethodEnum commandsCallbackMethod;
    public WirelessV1Sim withCommandsCallbackMethod(WirelessV1SimCommandsCallbackMethodEnum commandsCallbackMethod) {
        this.commandsCallbackMethod = commandsCallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands_callback_url")
    public String commandsCallbackUrl;
    public WirelessV1Sim withCommandsCallbackUrl(String commandsCallbackUrl) {
        this.commandsCallbackUrl = commandsCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public WirelessV1Sim withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public WirelessV1Sim withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e_id")
    public String eId;
    public WirelessV1Sim withEId(String eId) {
        this.eId = eId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public WirelessV1Sim withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iccid")
    public String iccid;
    public WirelessV1Sim withIccid(String iccid) {
        this.iccid = iccid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public WirelessV1Sim withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public WirelessV1Sim withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_plan_sid")
    public String ratePlanSid;
    public WirelessV1Sim withRatePlanSid(String ratePlanSid) {
        this.ratePlanSid = ratePlanSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reset_status")
    public SimEnumResetStatusEnum resetStatus;
    public WirelessV1Sim withResetStatus(SimEnumResetStatusEnum resetStatus) {
        this.resetStatus = resetStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public WirelessV1Sim withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_method")
    public WirelessV1SimSmsFallbackMethodEnum smsFallbackMethod;
    public WirelessV1Sim withSmsFallbackMethod(WirelessV1SimSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_fallback_url")
    public String smsFallbackUrl;
    public WirelessV1Sim withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_method")
    public WirelessV1SimSmsMethodEnum smsMethod;
    public WirelessV1Sim withSmsMethod(WirelessV1SimSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_url")
    public String smsUrl;
    public WirelessV1Sim withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SimEnumStatusEnum status;
    public WirelessV1Sim withStatus(SimEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public WirelessV1Sim withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public WirelessV1Sim withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_method")
    public WirelessV1SimVoiceFallbackMethodEnum voiceFallbackMethod;
    public WirelessV1Sim withVoiceFallbackMethod(WirelessV1SimVoiceFallbackMethodEnum voiceFallbackMethod) {
        this.voiceFallbackMethod = voiceFallbackMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_fallback_url")
    public String voiceFallbackUrl;
    public WirelessV1Sim withVoiceFallbackUrl(String voiceFallbackUrl) {
        this.voiceFallbackUrl = voiceFallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_method")
    public WirelessV1SimVoiceMethodEnum voiceMethod;
    public WirelessV1Sim withVoiceMethod(WirelessV1SimVoiceMethodEnum voiceMethod) {
        this.voiceMethod = voiceMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_url")
    public String voiceUrl;
    public WirelessV1Sim withVoiceUrl(String voiceUrl) {
        this.voiceUrl = voiceUrl;
        return this;
    }
}