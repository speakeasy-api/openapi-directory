package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceStatusInput
 * The status related settings of the inventory source.
**/
public class InventorySourceStatusInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityPauseReason")
    public String entityPauseReason;
    public InventorySourceStatusInput withEntityPauseReason(String entityPauseReason) {
        this.entityPauseReason = entityPauseReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public InventorySourceStatusEntityStatusEnum entityStatus;
    public InventorySourceStatusInput withEntityStatus(InventorySourceStatusEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
}