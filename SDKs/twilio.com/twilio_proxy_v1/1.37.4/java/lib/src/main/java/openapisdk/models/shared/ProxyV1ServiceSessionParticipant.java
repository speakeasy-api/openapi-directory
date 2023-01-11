package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProxyV1ServiceSessionParticipant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ProxyV1ServiceSessionParticipant withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ProxyV1ServiceSessionParticipant withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_deleted")
    public OffsetDateTime dateDeleted;
    public ProxyV1ServiceSessionParticipant withDateDeleted(OffsetDateTime dateDeleted) {
        this.dateDeleted = dateDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ProxyV1ServiceSessionParticipant withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ProxyV1ServiceSessionParticipant withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public ProxyV1ServiceSessionParticipant withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ProxyV1ServiceSessionParticipant withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_identifier")
    public String proxyIdentifier;
    public ProxyV1ServiceSessionParticipant withProxyIdentifier(String proxyIdentifier) {
        this.proxyIdentifier = proxyIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_identifier_sid")
    public String proxyIdentifierSid;
    public ProxyV1ServiceSessionParticipant withProxyIdentifierSid(String proxyIdentifierSid) {
        this.proxyIdentifierSid = proxyIdentifierSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public ProxyV1ServiceSessionParticipant withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_sid")
    public String sessionSid;
    public ProxyV1ServiceSessionParticipant withSessionSid(String sessionSid) {
        this.sessionSid = sessionSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ProxyV1ServiceSessionParticipant withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProxyV1ServiceSessionParticipant withUrl(String url) {
        this.url = url;
        return this;
    }
}