package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StudioV1FlowEngagement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public StudioV1FlowEngagement withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_channel_address")
    public String contactChannelAddress;
    public StudioV1FlowEngagement withContactChannelAddress(String contactChannelAddress) {
        this.contactChannelAddress = contactChannelAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_sid")
    public String contactSid;
    public StudioV1FlowEngagement withContactSid(String contactSid) {
        this.contactSid = contactSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public Object context;
    public StudioV1FlowEngagement withContext(Object context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public StudioV1FlowEngagement withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public StudioV1FlowEngagement withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flow_sid")
    public String flowSid;
    public StudioV1FlowEngagement withFlowSid(String flowSid) {
        this.flowSid = flowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public StudioV1FlowEngagement withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public StudioV1FlowEngagement withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EngagementEnumStatusEnum status;
    public StudioV1FlowEngagement withStatus(EngagementEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public StudioV1FlowEngagement withUrl(String url) {
        this.url = url;
        return this;
    }
}