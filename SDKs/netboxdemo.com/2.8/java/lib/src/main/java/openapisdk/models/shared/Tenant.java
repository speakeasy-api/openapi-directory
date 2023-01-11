package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Tenant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("circuit_count")
    public Long circuitCount;
    public Tenant withCircuitCount(Long circuitCount) {
        this.circuitCount = circuitCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_count")
    public Long clusterCount;
    public Tenant withClusterCount(Long clusterCount) {
        this.clusterCount = clusterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public Tenant withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public Tenant withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public Tenant withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Tenant withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_count")
    public Long deviceCount;
    public Tenant withDeviceCount(Long deviceCount) {
        this.deviceCount = deviceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public NestedTenantGroup group;
    public Tenant withGroup(NestedTenantGroup group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Tenant withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipaddress_count")
    public Long ipaddressCount;
    public Tenant withIpaddressCount(Long ipaddressCount) {
        this.ipaddressCount = ipaddressCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public Tenant withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Tenant withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix_count")
    public Long prefixCount;
    public Tenant withPrefixCount(Long prefixCount) {
        this.prefixCount = prefixCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rack_count")
    public Long rackCount;
    public Tenant withRackCount(Long rackCount) {
        this.rackCount = rackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_count")
    public Long siteCount;
    public Tenant withSiteCount(Long siteCount) {
        this.siteCount = siteCount;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public Tenant withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Tenant withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualmachine_count")
    public Long virtualmachineCount;
    public Tenant withVirtualmachineCount(Long virtualmachineCount) {
        this.virtualmachineCount = virtualmachineCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan_count")
    public Long vlanCount;
    public Tenant withVlanCount(Long vlanCount) {
        this.vlanCount = vlanCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vrf_count")
    public Long vrfCount;
    public Tenant withVrfCount(Long vrfCount) {
        this.vrfCount = vrfCount;
        return this;
    }
}