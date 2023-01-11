package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ServiceOfferingNode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("archived_at")
    public OffsetDateTime archivedAt;
    public ServiceOfferingNode withArchivedAt(OffsetDateTime archivedAt) {
        this.archivedAt = archivedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ServiceOfferingNode withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra")
    public java.util.Map<String, Object> extra;
    public ServiceOfferingNode withExtra(java.util.Map<String, Object> extra) {
        this.extra = extra;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ServiceOfferingNode withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_seen_at")
    public OffsetDateTime lastSeenAt;
    public ServiceOfferingNode withLastSeenAt(OffsetDateTime lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServiceOfferingNode withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_state_part_id")
    public String refreshStatePartId;
    public ServiceOfferingNode withRefreshStatePartId(String refreshStatePartId) {
        this.refreshStatePartId = refreshStatePartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root_service_offering_id")
    public String rootServiceOfferingId;
    public ServiceOfferingNode withRootServiceOfferingId(String rootServiceOfferingId) {
        this.rootServiceOfferingId = rootServiceOfferingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_inventory_id")
    public String serviceInventoryId;
    public ServiceOfferingNode withServiceInventoryId(String serviceInventoryId) {
        this.serviceInventoryId = serviceInventoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_offering_id")
    public String serviceOfferingId;
    public ServiceOfferingNode withServiceOfferingId(String serviceOfferingId) {
        this.serviceOfferingId = serviceOfferingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("source_created_at")
    public OffsetDateTime sourceCreatedAt;
    public ServiceOfferingNode withSourceCreatedAt(OffsetDateTime sourceCreatedAt) {
        this.sourceCreatedAt = sourceCreatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_id")
    public String sourceId;
    public ServiceOfferingNode withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ref")
    public String sourceRef;
    public ServiceOfferingNode withSourceRef(String sourceRef) {
        this.sourceRef = sourceRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("source_updated_at")
    public OffsetDateTime sourceUpdatedAt;
    public ServiceOfferingNode withSourceUpdatedAt(OffsetDateTime sourceUpdatedAt) {
        this.sourceUpdatedAt = sourceUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ServiceOfferingNode withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}