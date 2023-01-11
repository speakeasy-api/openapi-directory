package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceStatus
 * The status related settings of the inventory source.
**/
public class InventorySourceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configStatus")
    public InventorySourceStatusConfigStatusEnum configStatus;
    public InventorySourceStatus withConfigStatus(InventorySourceStatusConfigStatusEnum configStatus) {
        this.configStatus = configStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityPauseReason")
    public String entityPauseReason;
    public InventorySourceStatus withEntityPauseReason(String entityPauseReason) {
        this.entityPauseReason = entityPauseReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public InventorySourceStatusEntityStatusEnum entityStatus;
    public InventorySourceStatus withEntityStatus(InventorySourceStatusEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerPauseReason")
    public String sellerPauseReason;
    public InventorySourceStatus withSellerPauseReason(String sellerPauseReason) {
        this.sellerPauseReason = sellerPauseReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerStatus")
    public InventorySourceStatusSellerStatusEnum sellerStatus;
    public InventorySourceStatus withSellerStatus(InventorySourceStatusSellerStatusEnum sellerStatus) {
        this.sellerStatus = sellerStatus;
        return this;
    }
}