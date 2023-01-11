package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionContentDetails
 * Details about the content to witch a subscription refers.
**/
public class SubscriptionContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityType")
    public SubscriptionContentDetailsActivityTypeEnum activityType;
    public SubscriptionContentDetails withActivityType(SubscriptionContentDetailsActivityTypeEnum activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newItemCount")
    public Long newItemCount;
    public SubscriptionContentDetails withNewItemCount(Long newItemCount) {
        this.newItemCount = newItemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItemCount")
    public Long totalItemCount;
    public SubscriptionContentDetails withTotalItemCount(Long totalItemCount) {
        this.totalItemCount = totalItemCount;
        return this;
    }
}