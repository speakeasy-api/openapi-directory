package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ServiceInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("archived_at")
    public OffsetDateTime archivedAt;
    public ServiceInstance withArchivedAt(OffsetDateTime archivedAt) {
        this.archivedAt = archivedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ServiceInstance withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_url")
    public String externalUrl;
    public ServiceInstance withExternalUrl(String externalUrl) {
        this.externalUrl = externalUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra")
    public java.util.Map<String, Object> extra;
    public ServiceInstance withExtra(java.util.Map<String, Object> extra) {
        this.extra = extra;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ServiceInstance withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_seen_at")
    public OffsetDateTime lastSeenAt;
    public ServiceInstance withLastSeenAt(OffsetDateTime lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServiceInstance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_state_part_id")
    public String refreshStatePartId;
    public ServiceInstance withRefreshStatePartId(String refreshStatePartId) {
        this.refreshStatePartId = refreshStatePartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root_service_instance_id")
    public String rootServiceInstanceId;
    public ServiceInstance withRootServiceInstanceId(String rootServiceInstanceId) {
        this.rootServiceInstanceId = rootServiceInstanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_inventory_id")
    public String serviceInventoryId;
    public ServiceInstance withServiceInventoryId(String serviceInventoryId) {
        this.serviceInventoryId = serviceInventoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_offering_id")
    public String serviceOfferingId;
    public ServiceInstance withServiceOfferingId(String serviceOfferingId) {
        this.serviceOfferingId = serviceOfferingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_plan_id")
    public String servicePlanId;
    public ServiceInstance withServicePlanId(String servicePlanId) {
        this.servicePlanId = servicePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("source_created_at")
    public OffsetDateTime sourceCreatedAt;
    public ServiceInstance withSourceCreatedAt(OffsetDateTime sourceCreatedAt) {
        this.sourceCreatedAt = sourceCreatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("source_deleted_at")
    public OffsetDateTime sourceDeletedAt;
    public ServiceInstance withSourceDeletedAt(OffsetDateTime sourceDeletedAt) {
        this.sourceDeletedAt = sourceDeletedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_id")
    public String sourceId;
    public ServiceInstance withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ref")
    public String sourceRef;
    public ServiceInstance withSourceRef(String sourceRef) {
        this.sourceRef = sourceRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ServiceInstance withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}