package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableVirtualMachineWithConfigContextInput {
    @JsonProperty("cluster")
    public Long cluster;
    public WritableVirtualMachineWithConfigContextInput withCluster(Long cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WritableVirtualMachineWithConfigContextInput withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableVirtualMachineWithConfigContextInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disk")
    public Long disk;
    public WritableVirtualMachineWithConfigContextInput withDisk(Long disk) {
        this.disk = disk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_context_data")
    public String localContextData;
    public WritableVirtualMachineWithConfigContextInput withLocalContextData(String localContextData) {
        this.localContextData = localContextData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public Long memory;
    public WritableVirtualMachineWithConfigContextInput withMemory(Long memory) {
        this.memory = memory;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableVirtualMachineWithConfigContextInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public Long platform;
    public WritableVirtualMachineWithConfigContextInput withPlatform(Long platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip4")
    public Long primaryIp4;
    public WritableVirtualMachineWithConfigContextInput withPrimaryIp4(Long primaryIp4) {
        this.primaryIp4 = primaryIp4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip6")
    public Long primaryIp6;
    public WritableVirtualMachineWithConfigContextInput withPrimaryIp6(Long primaryIp6) {
        this.primaryIp6 = primaryIp6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public Long role;
    public WritableVirtualMachineWithConfigContextInput withRole(Long role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WritableVirtualMachineWithConfigContextStatusEnum status;
    public WritableVirtualMachineWithConfigContextInput withStatus(WritableVirtualMachineWithConfigContextStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableVirtualMachineWithConfigContextInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public Long tenant;
    public WritableVirtualMachineWithConfigContextInput withTenant(Long tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcpus")
    public Long vcpus;
    public WritableVirtualMachineWithConfigContextInput withVcpus(Long vcpus) {
        this.vcpus = vcpus;
        return this;
    }
}