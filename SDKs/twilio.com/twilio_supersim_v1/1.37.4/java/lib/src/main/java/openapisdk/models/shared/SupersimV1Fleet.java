package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SupersimV1Fleet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public SupersimV1Fleet withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_enabled")
    public Boolean dataEnabled;
    public SupersimV1Fleet withDataEnabled(Boolean dataEnabled) {
        this.dataEnabled = dataEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_limit")
    public Long dataLimit;
    public SupersimV1Fleet withDataLimit(Long dataLimit) {
        this.dataLimit = dataLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_metering")
    public FleetEnumDataMeteringEnum dataMetering;
    public SupersimV1Fleet withDataMetering(FleetEnumDataMeteringEnum dataMetering) {
        this.dataMetering = dataMetering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public SupersimV1Fleet withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public SupersimV1Fleet withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_commands_method")
    public SupersimV1FleetIpCommandsMethodEnum ipCommandsMethod;
    public SupersimV1Fleet withIpCommandsMethod(SupersimV1FleetIpCommandsMethodEnum ipCommandsMethod) {
        this.ipCommandsMethod = ipCommandsMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_commands_url")
    public String ipCommandsUrl;
    public SupersimV1Fleet withIpCommandsUrl(String ipCommandsUrl) {
        this.ipCommandsUrl = ipCommandsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_access_profile_sid")
    public String networkAccessProfileSid;
    public SupersimV1Fleet withNetworkAccessProfileSid(String networkAccessProfileSid) {
        this.networkAccessProfileSid = networkAccessProfileSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public SupersimV1Fleet withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_commands_enabled")
    public Boolean smsCommandsEnabled;
    public SupersimV1Fleet withSmsCommandsEnabled(Boolean smsCommandsEnabled) {
        this.smsCommandsEnabled = smsCommandsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_commands_method")
    public SupersimV1FleetSmsCommandsMethodEnum smsCommandsMethod;
    public SupersimV1Fleet withSmsCommandsMethod(SupersimV1FleetSmsCommandsMethodEnum smsCommandsMethod) {
        this.smsCommandsMethod = smsCommandsMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_commands_url")
    public String smsCommandsUrl;
    public SupersimV1Fleet withSmsCommandsUrl(String smsCommandsUrl) {
        this.smsCommandsUrl = smsCommandsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public SupersimV1Fleet withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SupersimV1Fleet withUrl(String url) {
        this.url = url;
        return this;
    }
}