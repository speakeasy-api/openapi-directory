package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFullVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chipset")
    public String chipset;
    public NodeFullVideos withChipset(String chipset) {
        this.chipset = chipset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFullVideos withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memory")
    public String memory;
    public NodeFullVideos withMemory(String memory) {
        this.memory = memory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullVideos withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public NodeFullVideos withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public String resolution;
    public NodeFullVideos withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
}