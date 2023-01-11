package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuaranteedOrderStatus
 * The status settings of the guaranteed order.
**/
public class GuaranteedOrderStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configStatus")
    public GuaranteedOrderStatusConfigStatusEnum configStatus;
    public GuaranteedOrderStatus withConfigStatus(GuaranteedOrderStatusConfigStatusEnum configStatus) {
        this.configStatus = configStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityPauseReason")
    public String entityPauseReason;
    public GuaranteedOrderStatus withEntityPauseReason(String entityPauseReason) {
        this.entityPauseReason = entityPauseReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public GuaranteedOrderStatusEntityStatusEnum entityStatus;
    public GuaranteedOrderStatus withEntityStatus(GuaranteedOrderStatusEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
}