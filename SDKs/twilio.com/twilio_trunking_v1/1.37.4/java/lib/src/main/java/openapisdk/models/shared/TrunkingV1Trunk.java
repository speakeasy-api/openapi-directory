package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrunkingV1Trunk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TrunkingV1Trunk withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_type")
    public String authType;
    public TrunkingV1Trunk withAuthType(String authType) {
        this.authType = authType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_type_set")
    public String[] authTypeSet;
    public TrunkingV1Trunk withAuthTypeSet(String[] authTypeSet) {
        this.authTypeSet = authTypeSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cnam_lookup_enabled")
    public Boolean cnamLookupEnabled;
    public TrunkingV1Trunk withCnamLookupEnabled(Boolean cnamLookupEnabled) {
        this.cnamLookupEnabled = cnamLookupEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TrunkingV1Trunk withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public TrunkingV1Trunk withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disaster_recovery_method")
    public TrunkingV1TrunkDisasterRecoveryMethodEnum disasterRecoveryMethod;
    public TrunkingV1Trunk withDisasterRecoveryMethod(TrunkingV1TrunkDisasterRecoveryMethodEnum disasterRecoveryMethod) {
        this.disasterRecoveryMethod = disasterRecoveryMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disaster_recovery_url")
    public String disasterRecoveryUrl;
    public TrunkingV1Trunk withDisasterRecoveryUrl(String disasterRecoveryUrl) {
        this.disasterRecoveryUrl = disasterRecoveryUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_name")
    public String domainName;
    public TrunkingV1Trunk withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public TrunkingV1Trunk withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public TrunkingV1Trunk withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public Object recording;
    public TrunkingV1Trunk withRecording(Object recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secure")
    public Boolean secure;
    public TrunkingV1Trunk withSecure(Boolean secure) {
        this.secure = secure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TrunkingV1Trunk withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_caller_id")
    public TrunkEnumTransferCallerIdEnum transferCallerId;
    public TrunkingV1Trunk withTransferCallerId(TrunkEnumTransferCallerIdEnum transferCallerId) {
        this.transferCallerId = transferCallerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer_mode")
    public TrunkEnumTransferSettingEnum transferMode;
    public TrunkingV1Trunk withTransferMode(TrunkEnumTransferSettingEnum transferMode) {
        this.transferMode = transferMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TrunkingV1Trunk withUrl(String url) {
        this.url = url;
        return this;
    }
}