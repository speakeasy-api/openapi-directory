package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionPlan
 * The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.
**/
public class SubscriptionPlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentInterval")
    public SubscriptionPlanCommitmentInterval commitmentInterval;
    public SubscriptionPlan withCommitmentInterval(SubscriptionPlanCommitmentInterval commitmentInterval) {
        this.commitmentInterval = commitmentInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCommitmentPlan")
    public Boolean isCommitmentPlan;
    public SubscriptionPlan withIsCommitmentPlan(Boolean isCommitmentPlan) {
        this.isCommitmentPlan = isCommitmentPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planName")
    public String planName;
    public SubscriptionPlan withPlanName(String planName) {
        this.planName = planName;
        return this;
    }
}