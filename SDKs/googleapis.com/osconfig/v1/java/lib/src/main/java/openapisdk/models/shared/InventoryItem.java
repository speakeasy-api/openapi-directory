package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InventoryItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availablePackage")
    public InventorySoftwarePackage availablePackage;
    public InventoryItem withAvailablePackage(InventorySoftwarePackage availablePackage) {
        this.availablePackage = availablePackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public InventoryItem withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public InventoryItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installedPackage")
    public InventorySoftwarePackage installedPackage;
    public InventoryItem withInstalledPackage(InventorySoftwarePackage installedPackage) {
        this.installedPackage = installedPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originType")
    public InventoryItemOriginTypeEnum originType;
    public InventoryItem withOriginType(InventoryItemOriginTypeEnum originType) {
        this.originType = originType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public InventoryItemTypeEnum type;
    public InventoryItem withType(InventoryItemTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public InventoryItem withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}