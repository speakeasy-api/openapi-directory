package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CustomerSubscriptionUpdateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerPlanId")
    public String customerPlanId;
    public CustomerSubscriptionUpdateModel withCustomerPlanId(String customerPlanId) {
        this.customerPlanId = customerPlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("planStart")
    public OffsetDateTime planStart;
    public CustomerSubscriptionUpdateModel withPlanStart(OffsetDateTime planStart) {
        this.planStart = planStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trialPeriodEnd")
    public OffsetDateTime trialPeriodEnd;
    public CustomerSubscriptionUpdateModel withTrialPeriodEnd(OffsetDateTime trialPeriodEnd) {
        this.trialPeriodEnd = trialPeriodEnd;
        return this;
    }
}