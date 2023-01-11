package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class IpMessagingV2ServiceChannelInvite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public IpMessagingV2ServiceChannelInvite withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_sid")
    public String channelSid;
    public IpMessagingV2ServiceChannelInvite withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public IpMessagingV2ServiceChannelInvite withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public IpMessagingV2ServiceChannelInvite withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public IpMessagingV2ServiceChannelInvite withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public IpMessagingV2ServiceChannelInvite withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_sid")
    public String roleSid;
    public IpMessagingV2ServiceChannelInvite withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public IpMessagingV2ServiceChannelInvite withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public IpMessagingV2ServiceChannelInvite withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public IpMessagingV2ServiceChannelInvite withUrl(String url) {
        this.url = url;
        return this;
    }
}