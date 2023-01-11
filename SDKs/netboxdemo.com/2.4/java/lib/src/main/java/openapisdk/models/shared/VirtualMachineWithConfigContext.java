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

public class VirtualMachineWithConfigContext {
    @JsonProperty("cluster")
    public NestedCluster cluster;
    public VirtualMachineWithConfigContext withCluster(NestedCluster cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public VirtualMachineWithConfigContext withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_context")
    public String configContext;
    public VirtualMachineWithConfigContext withConfigContext(String configContext) {
        this.configContext = configContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public VirtualMachineWithConfigContext withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public VirtualMachineWithConfigContext withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disk")
    public Long disk;
    public VirtualMachineWithConfigContext withDisk(Long disk) {
        this.disk = disk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public VirtualMachineWithConfigContext withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public VirtualMachineWithConfigContext withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_context_data")
    public String localContextData;
    public VirtualMachineWithConfigContext withLocalContextData(String localContextData) {
        this.localContextData = localContextData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public Long memory;
    public VirtualMachineWithConfigContext withMemory(Long memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public VirtualMachineWithConfigContext withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public NestedPlatform platform;
    public VirtualMachineWithConfigContext withPlatform(NestedPlatform platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip")
    public VirtualMachineIpAddress primaryIp;
    public VirtualMachineWithConfigContext withPrimaryIp(VirtualMachineIpAddress primaryIp) {
        this.primaryIp = primaryIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip4")
    public VirtualMachineIpAddress primaryIp4;
    public VirtualMachineWithConfigContext withPrimaryIp4(VirtualMachineIpAddress primaryIp4) {
        this.primaryIp4 = primaryIp4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip6")
    public VirtualMachineIpAddress primaryIp6;
    public VirtualMachineWithConfigContext withPrimaryIp6(VirtualMachineIpAddress primaryIp6) {
        this.primaryIp6 = primaryIp6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public NestedDeviceRole role;
    public VirtualMachineWithConfigContext withRole(NestedDeviceRole role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VirtualMachineWithConfigContextStatus status;
    public VirtualMachineWithConfigContext withStatus(VirtualMachineWithConfigContextStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public VirtualMachineWithConfigContext withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public NestedTenant tenant;
    public VirtualMachineWithConfigContext withTenant(NestedTenant tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcpus")
    public Long vcpus;
    public VirtualMachineWithConfigContext withVcpus(Long vcpus) {
        this.vcpus = vcpus;
        return this;
    }
}