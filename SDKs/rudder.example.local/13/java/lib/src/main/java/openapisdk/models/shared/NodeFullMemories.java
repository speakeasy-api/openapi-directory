package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeFullMemories
 * Memory slots
**/
public class NodeFullMemories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacity")
    public Long capacity;
    public NodeFullMemories withCapacity(Long capacity) {
        this.capacity = capacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public NodeFullMemories withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFullMemories withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullMemories withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public NodeFullMemories withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public NodeFullMemories withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotNumber")
    public Long slotNumber;
    public NodeFullMemories withSlotNumber(Long slotNumber) {
        this.slotNumber = slotNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speed")
    public Long speed;
    public NodeFullMemories withSpeed(Long speed) {
        this.speed = speed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NodeFullMemories withType(String type) {
        this.type = type;
        return this;
    }
}