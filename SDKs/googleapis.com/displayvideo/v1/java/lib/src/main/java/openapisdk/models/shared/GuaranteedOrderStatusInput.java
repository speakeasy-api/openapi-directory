package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuaranteedOrderStatusInput
 * The status settings of the guaranteed order.
**/
public class GuaranteedOrderStatusInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityPauseReason")
    public String entityPauseReason;
    public GuaranteedOrderStatusInput withEntityPauseReason(String entityPauseReason) {
        this.entityPauseReason = entityPauseReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public GuaranteedOrderStatusEntityStatusEnum entityStatus;
    public GuaranteedOrderStatusInput withEntityStatus(GuaranteedOrderStatusEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
}