package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFullVirtualMachines {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFullVirtualMachines withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public String memory;
    public NodeFullVirtualMachines withMemory(String memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullVirtualMachines withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public NodeFullVirtualMachines withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public NodeFullVirtualMachines withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subsystem")
    public String subsystem;
    public NodeFullVirtualMachines withSubsystem(String subsystem) {
        this.subsystem = subsystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NodeFullVirtualMachines withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public NodeFullVirtualMachines withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcpu")
    public String vcpu;
    public NodeFullVirtualMachines withVcpu(String vcpu) {
        this.vcpu = vcpu;
        return this;
    }
}