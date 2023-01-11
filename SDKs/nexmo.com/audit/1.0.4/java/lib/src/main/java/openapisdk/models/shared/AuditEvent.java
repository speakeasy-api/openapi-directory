package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public EventLink links;
    public AuditEvent withLinks(EventLink links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public AuditEvent withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public java.util.Map<String, Object> context;
    public AuditEvent withContext(java.util.Map<String, Object> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public LocalDate createdAt;
    public AuditEvent withCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_type")
    public EventTypesEnum eventType;
    public AuditEvent withEventType(EventTypesEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_type_description")
    public String eventTypeDescription;
    public AuditEvent withEventTypeDescription(String eventTypeDescription) {
        this.eventTypeDescription = eventTypeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AuditEvent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public AuditEventSourceEnum source;
    public AuditEvent withSource(AuditEventSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_country")
    public String sourceCountry;
    public AuditEvent withSourceCountry(String sourceCountry) {
        this.sourceCountry = sourceCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_description")
    public AuditEventSourceDescriptionEnum sourceDescription;
    public AuditEvent withSourceDescription(AuditEventSourceDescriptionEnum sourceDescription) {
        this.sourceDescription = sourceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ip")
    public String sourceIp;
    public AuditEvent withSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_email")
    public String userEmail;
    public AuditEvent withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Long userId;
    public AuditEvent withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}