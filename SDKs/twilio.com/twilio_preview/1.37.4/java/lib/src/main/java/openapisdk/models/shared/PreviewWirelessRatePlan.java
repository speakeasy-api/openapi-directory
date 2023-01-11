package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PreviewWirelessRatePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public PreviewWirelessRatePlan withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_enabled")
    public Boolean dataEnabled;
    public PreviewWirelessRatePlan withDataEnabled(Boolean dataEnabled) {
        this.dataEnabled = dataEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_limit")
    public Long dataLimit;
    public PreviewWirelessRatePlan withDataLimit(Long dataLimit) {
        this.dataLimit = dataLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_metering")
    public String dataMetering;
    public PreviewWirelessRatePlan withDataMetering(String dataMetering) {
        this.dataMetering = dataMetering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public PreviewWirelessRatePlan withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public PreviewWirelessRatePlan withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public PreviewWirelessRatePlan withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("international_roaming")
    public String[] internationalRoaming;
    public PreviewWirelessRatePlan withInternationalRoaming(String[] internationalRoaming) {
        this.internationalRoaming = internationalRoaming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messaging_enabled")
    public Boolean messagingEnabled;
    public PreviewWirelessRatePlan withMessagingEnabled(Boolean messagingEnabled) {
        this.messagingEnabled = messagingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("national_roaming_enabled")
    public Boolean nationalRoamingEnabled;
    public PreviewWirelessRatePlan withNationalRoamingEnabled(Boolean nationalRoamingEnabled) {
        this.nationalRoamingEnabled = nationalRoamingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public PreviewWirelessRatePlan withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public PreviewWirelessRatePlan withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewWirelessRatePlan withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_enabled")
    public Boolean voiceEnabled;
    public PreviewWirelessRatePlan withVoiceEnabled(Boolean voiceEnabled) {
        this.voiceEnabled = voiceEnabled;
        return this;
    }
}