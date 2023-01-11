package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InventoryItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_tag")
    public String assetTag;
    public InventoryItem withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InventoryItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public InventoryItem withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discovered")
    public Boolean discovered;
    public InventoryItem withDiscovered(Boolean discovered) {
        this.discovered = discovered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public InventoryItem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public NestedManufacturer manufacturer;
    public InventoryItem withManufacturer(NestedManufacturer manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public InventoryItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public Long parent;
    public InventoryItem withParent(Long parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part_id")
    public String partId;
    public InventoryItem withPartId(String partId) {
        this.partId = partId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public InventoryItem withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public InventoryItem withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}