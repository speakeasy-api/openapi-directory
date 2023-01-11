package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Webhook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public WebhookApiVersionEnum apiVersion;
    public Webhook withApiVersion(WebhookApiVersionEnum apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("changed")
    public OffsetDateTime changed;
    public Webhook withChanged(OffsetDateTime changed) {
        this.changed = changed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changed_by")
    public ChangedBy changedBy;
    public Webhook withChangedBy(ChangedBy changedBy) {
        this.changedBy = changedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_cert")
    public Boolean checkCert;
    public Webhook withCheckCert(Boolean checkCert) {
        this.checkCert = checkCert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Webhook withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public ChangedBy createdBy;
    public Webhook withCreatedBy(ChangedBy createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Webhook withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Webhook withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Webhook withUrl(String url) {
        this.url = url;
        return this;
    }
}