package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ChatV2ServiceChannelMember {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ChatV2ServiceChannelMember withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public String attributes;
    public ChatV2ServiceChannelMember withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_sid")
    public String channelSid;
    public ChatV2ServiceChannelMember withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ChatV2ServiceChannelMember withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ChatV2ServiceChannelMember withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public ChatV2ServiceChannelMember withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_consumed_message_index")
    public Long lastConsumedMessageIndex;
    public ChatV2ServiceChannelMember withLastConsumedMessageIndex(Long lastConsumedMessageIndex) {
        this.lastConsumedMessageIndex = lastConsumedMessageIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_consumption_timestamp")
    public OffsetDateTime lastConsumptionTimestamp;
    public ChatV2ServiceChannelMember withLastConsumptionTimestamp(OffsetDateTime lastConsumptionTimestamp) {
        this.lastConsumptionTimestamp = lastConsumptionTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_sid")
    public String roleSid;
    public ChatV2ServiceChannelMember withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public ChatV2ServiceChannelMember withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ChatV2ServiceChannelMember withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ChatV2ServiceChannelMember withUrl(String url) {
        this.url = url;
        return this;
    }
}