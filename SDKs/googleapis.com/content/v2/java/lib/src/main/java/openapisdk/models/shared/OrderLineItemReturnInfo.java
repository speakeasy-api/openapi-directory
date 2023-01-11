package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemReturnInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daysToReturn")
    public Integer daysToReturn;
    public OrderLineItemReturnInfo withDaysToReturn(Integer daysToReturn) {
        this.daysToReturn = daysToReturn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReturnable")
    public Boolean isReturnable;
    public OrderLineItemReturnInfo withIsReturnable(Boolean isReturnable) {
        this.isReturnable = isReturnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyUrl")
    public String policyUrl;
    public OrderLineItemReturnInfo withPolicyUrl(String policyUrl) {
        this.policyUrl = policyUrl;
        return this;
    }
}