package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeConfig
 * Configuration for a Memcached Node.
**/
public class NodeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuCount")
    public Integer cpuCount;
    public NodeConfig withCpuCount(Integer cpuCount) {
        this.cpuCount = cpuCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memorySizeMb")
    public Integer memorySizeMb;
    public NodeConfig withMemorySizeMb(Integer memorySizeMb) {
        this.memorySizeMb = memorySizeMb;
        return this;
    }
}