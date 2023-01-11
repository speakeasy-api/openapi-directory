package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableInventoryItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_tag")
    public String assetTag;
    public WritableInventoryItemInput withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableInventoryItemInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritableInventoryItemInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discovered")
    public Boolean discovered;
    public WritableInventoryItemInput withDiscovered(Boolean discovered) {
        this.discovered = discovered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public Long manufacturer;
    public WritableInventoryItemInput withManufacturer(Long manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableInventoryItemInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public Long parent;
    public WritableInventoryItemInput withParent(Long parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part_id")
    public String partId;
    public WritableInventoryItemInput withPartId(String partId) {
        this.partId = partId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public WritableInventoryItemInput withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableInventoryItemInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}