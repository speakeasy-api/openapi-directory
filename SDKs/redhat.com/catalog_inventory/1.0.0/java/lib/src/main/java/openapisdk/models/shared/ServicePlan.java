package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ServicePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("archived_at")
    public OffsetDateTime archivedAt;
    public ServicePlan withArchivedAt(OffsetDateTime archivedAt) {
        this.archivedAt = archivedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create_json_schema")
    public java.util.Map<String, Object> createJsonSchema;
    public ServicePlan withCreateJsonSchema(java.util.Map<String, Object> createJsonSchema) {
        this.createJsonSchema = createJsonSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ServicePlan withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServicePlan withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra")
    public java.util.Map<String, Object> extra;
    public ServicePlan withExtra(java.util.Map<String, Object> extra) {
        this.extra = extra;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ServicePlan withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_seen_at")
    public OffsetDateTime lastSeenAt;
    public ServicePlan withLastSeenAt(OffsetDateTime lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServicePlan withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_state_part_id")
    public String refreshStatePartId;
    public ServicePlan withRefreshStatePartId(String refreshStatePartId) {
        this.refreshStatePartId = refreshStatePartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_version")
    public String resourceVersion;
    public ServicePlan withResourceVersion(String resourceVersion) {
        this.resourceVersion = resourceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_offering_id")
    public String serviceOfferingId;
    public ServicePlan withServiceOfferingId(String serviceOfferingId) {
        this.serviceOfferingId = serviceOfferingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("source_created_at")
    public OffsetDateTime sourceCreatedAt;
    public ServicePlan withSourceCreatedAt(OffsetDateTime sourceCreatedAt) {
        this.sourceCreatedAt = sourceCreatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("source_deleted_at")
    public OffsetDateTime sourceDeletedAt;
    public ServicePlan withSourceDeletedAt(OffsetDateTime sourceDeletedAt) {
        this.sourceDeletedAt = sourceDeletedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_id")
    public String sourceId;
    public ServicePlan withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ref")
    public String sourceRef;
    public ServicePlan withSourceRef(String sourceRef) {
        this.sourceRef = sourceRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_json_schema")
    public String updateJsonSchema;
    public ServicePlan withUpdateJsonSchema(String updateJsonSchema) {
        this.updateJsonSchema = updateJsonSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ServicePlan withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}