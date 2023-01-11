package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProxyV1ServiceSessionParticipantMessageInteraction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public ProxyV1ServiceSessionParticipantMessageInteraction withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ProxyV1ServiceSessionParticipantMessageInteraction withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ProxyV1ServiceSessionParticipantMessageInteraction withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_participant_sid")
    public String inboundParticipantSid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withInboundParticipantSid(String inboundParticipantSid) {
        this.inboundParticipantSid = inboundParticipantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_resource_sid")
    public String inboundResourceSid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withInboundResourceSid(String inboundResourceSid) {
        this.inboundResourceSid = inboundResourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_resource_status")
    public MessageInteractionEnumResourceStatusEnum inboundResourceStatus;
    public ProxyV1ServiceSessionParticipantMessageInteraction withInboundResourceStatus(MessageInteractionEnumResourceStatusEnum inboundResourceStatus) {
        this.inboundResourceStatus = inboundResourceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_resource_type")
    public String inboundResourceType;
    public ProxyV1ServiceSessionParticipantMessageInteraction withInboundResourceType(String inboundResourceType) {
        this.inboundResourceType = inboundResourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_resource_url")
    public String inboundResourceUrl;
    public ProxyV1ServiceSessionParticipantMessageInteraction withInboundResourceUrl(String inboundResourceUrl) {
        this.inboundResourceUrl = inboundResourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_participant_sid")
    public String outboundParticipantSid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withOutboundParticipantSid(String outboundParticipantSid) {
        this.outboundParticipantSid = outboundParticipantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_resource_sid")
    public String outboundResourceSid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withOutboundResourceSid(String outboundResourceSid) {
        this.outboundResourceSid = outboundResourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_resource_status")
    public MessageInteractionEnumResourceStatusEnum outboundResourceStatus;
    public ProxyV1ServiceSessionParticipantMessageInteraction withOutboundResourceStatus(MessageInteractionEnumResourceStatusEnum outboundResourceStatus) {
        this.outboundResourceStatus = outboundResourceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_resource_type")
    public String outboundResourceType;
    public ProxyV1ServiceSessionParticipantMessageInteraction withOutboundResourceType(String outboundResourceType) {
        this.outboundResourceType = outboundResourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_resource_url")
    public String outboundResourceUrl;
    public ProxyV1ServiceSessionParticipantMessageInteraction withOutboundResourceUrl(String outboundResourceUrl) {
        this.outboundResourceUrl = outboundResourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_sid")
    public String participantSid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_sid")
    public String sessionSid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withSessionSid(String sessionSid) {
        this.sessionSid = sessionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ProxyV1ServiceSessionParticipantMessageInteraction withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MessageInteractionEnumTypeEnum type;
    public ProxyV1ServiceSessionParticipantMessageInteraction withType(MessageInteractionEnumTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProxyV1ServiceSessionParticipantMessageInteraction withUrl(String url) {
        this.url = url;
        return this;
    }
}