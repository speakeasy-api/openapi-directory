package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlanData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Integer amount;
    public PlanData withAmount(Integer amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public PlanDataTypeOfPlanBasedOnTheSourceEnum plan;
    public PlanData withPlan(PlanDataTypeOfPlanBasedOnTheSourceEnum plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public PlanDataServiceThatProvisionedThePlanEnum source;
    public PlanData withSource(PlanDataServiceThatProvisionedThePlanEnum source) {
        this.source = source;
        return this;
    }
}