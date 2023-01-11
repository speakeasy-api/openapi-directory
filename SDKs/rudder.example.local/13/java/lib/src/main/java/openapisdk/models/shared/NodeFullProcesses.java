package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeFullProcesses
 * Process information
**/
public class NodeFullProcesses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuUsage")
    public Long cpuUsage;
    public NodeFullProcesses withCpuUsage(Long cpuUsage) {
        this.cpuUsage = cpuUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFullProcesses withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public Float memory;
    public NodeFullProcesses withMemory(Float memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullProcesses withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pid")
    public Long pid;
    public NodeFullProcesses withPid(Long pid) {
        this.pid = pid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("started")
    public LocalDate started;
    public NodeFullProcesses withStarted(LocalDate started) {
        this.started = started;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tty")
    public String tty;
    public NodeFullProcesses withTty(String tty) {
        this.tty = tty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public NodeFullProcesses withUser(String user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualMemory")
    public Long virtualMemory;
    public NodeFullProcesses withVirtualMemory(Long virtualMemory) {
        this.virtualMemory = virtualMemory;
        return this;
    }
}