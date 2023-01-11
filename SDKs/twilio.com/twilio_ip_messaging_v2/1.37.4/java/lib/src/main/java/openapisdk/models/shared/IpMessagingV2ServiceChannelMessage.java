package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class IpMessagingV2ServiceChannelMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public IpMessagingV2ServiceChannelMessage withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public String attributes;
    public IpMessagingV2ServiceChannelMessage withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public IpMessagingV2ServiceChannelMessage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_sid")
    public String channelSid;
    public IpMessagingV2ServiceChannelMessage withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public IpMessagingV2ServiceChannelMessage withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public IpMessagingV2ServiceChannelMessage withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public IpMessagingV2ServiceChannelMessage withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;
    public IpMessagingV2ServiceChannelMessage withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_updated_by")
    public String lastUpdatedBy;
    public IpMessagingV2ServiceChannelMessage withLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public Object media;
    public IpMessagingV2ServiceChannelMessage withMedia(Object media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public IpMessagingV2ServiceChannelMessage withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public IpMessagingV2ServiceChannelMessage withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public IpMessagingV2ServiceChannelMessage withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public IpMessagingV2ServiceChannelMessage withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public IpMessagingV2ServiceChannelMessage withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("was_edited")
    public Boolean wasEdited;
    public IpMessagingV2ServiceChannelMessage withWasEdited(Boolean wasEdited) {
        this.wasEdited = wasEdited;
        return this;
    }
}