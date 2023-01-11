package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFull {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public String[] accounts;
    public NodeFull withAccounts(String[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architectureDescription")
    public String architectureDescription;
    public NodeFull withArchitectureDescription(String architectureDescription) {
        this.architectureDescription = architectureDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bios")
    public NodeFullBios bios;
    public NodeFull withBios(NodeFullBios bios) {
        this.bios = bios;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controllers")
    public NodeFullControllers[] controllers;
    public NodeFull withControllers(NodeFullControllers[] controllers) {
        this.controllers = controllers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFull withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public NodeFullEnvironmentVariables[] environmentVariables;
    public NodeFull withEnvironmentVariables(NodeFullEnvironmentVariables[] environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSystems")
    public NodeFullFileSystems[] fileSystems;
    public NodeFull withFileSystems(NodeFullFileSystems[] fileSystems) {
        this.fileSystems = fileSystems;
        return this;
    }
    @JsonProperty("hostname")
    public String hostname;
    public NodeFull withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public NodeFull withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ipAddresses")
    public String[] ipAddresses;
    public NodeFull withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastInventoryDate")
    public LocalDate lastInventoryDate;
    public NodeFull withLastInventoryDate(LocalDate lastInventoryDate) {
        this.lastInventoryDate = lastInventoryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRunDate")
    public LocalDate lastRunDate;
    public NodeFull withLastRunDate(LocalDate lastRunDate) {
        this.lastRunDate = lastRunDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machine")
    public NodeFullMachine machine;
    public NodeFull withMachine(NodeFullMachine machine) {
        this.machine = machine;
        return this;
    }
    @JsonProperty("managementTechnology")
    public NodeFullManagementTechnology[] managementTechnology;
    public NodeFull withManagementTechnology(NodeFullManagementTechnology[] managementTechnology) {
        this.managementTechnology = managementTechnology;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managementTechnologyDetails")
    public NodeFullManagementTechnologyDetails managementTechnologyDetails;
    public NodeFull withManagementTechnologyDetails(NodeFullManagementTechnologyDetails managementTechnologyDetails) {
        this.managementTechnologyDetails = managementTechnologyDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memories")
    public NodeFullMemories[] memories;
    public NodeFull withMemories(NodeFullMemories[] memories) {
        this.memories = memories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NodeFullNetworkInterfaces[] networkInterfaces;
    public NodeFull withNetworkInterfaces(NodeFullNetworkInterfaces[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os")
    public NodeFullOs os;
    public NodeFull withOs(NodeFullOs os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyMode")
    public NodeFullPolicyModeEnum policyMode;
    public NodeFull withPolicyMode(NodeFullPolicyModeEnum policyMode) {
        this.policyMode = policyMode;
        return this;
    }
    @JsonProperty("policyServerId")
    public String policyServerId;
    public NodeFull withPolicyServerId(String policyServerId) {
        this.policyServerId = policyServerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public NodeFullPorts[] ports;
    public NodeFull withPorts(NodeFullPorts[] ports) {
        this.ports = ports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processes")
    public NodeFullProcesses[] processes;
    public NodeFull withProcesses(NodeFullProcesses[] processes) {
        this.processes = processes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processors")
    public NodeFullProcessors[] processors;
    public NodeFull withProcessors(NodeFullProcessors[] processors) {
        this.processors = processors;
        return this;
    }
    @JsonProperty("properties")
    public NodeFullProperties[] properties;
    public NodeFull withProperties(NodeFullProperties[] properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ram")
    public Long ram;
    public NodeFull withRam(Long ram) {
        this.ram = ram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slots")
    public NodeFullSlots[] slots;
    public NodeFull withSlots(NodeFullSlots[] slots) {
        this.slots = slots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("software")
    public NodeFullSoftware[] software;
    public NodeFull withSoftware(NodeFullSoftware[] software) {
        this.software = software;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sound")
    public NodeFullSound[] sound;
    public NodeFull withSound(NodeFullSound[] sound) {
        this.sound = sound;
        return this;
    }
    @JsonProperty("status")
    public NodeFullStatusEnum status;
    public NodeFull withStatus(NodeFullStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storage")
    public NodeFullStorage[] storage;
    public NodeFull withStorage(NodeFullStorage[] storage) {
        this.storage = storage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public NodeFullTimezone timezone;
    public NodeFull withTimezone(NodeFullTimezone timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public NodeFullVideos[] videos;
    public NodeFull withVideos(NodeFullVideos[] videos) {
        this.videos = videos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualMachines")
    public NodeFullVirtualMachines[] virtualMachines;
    public NodeFull withVirtualMachines(NodeFullVirtualMachines[] virtualMachines) {
        this.virtualMachines = virtualMachines;
        return this;
    }
}