package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CustomerSubscriptionViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public CustomerSubscriptionViewModel withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerPlanId")
    public String customerPlanId;
    public CustomerSubscriptionViewModel withCustomerPlanId(String customerPlanId) {
        this.customerPlanId = customerPlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerPlanName")
    public String customerPlanName;
    public CustomerSubscriptionViewModel withCustomerPlanName(String customerPlanName) {
        this.customerPlanName = customerPlanName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CustomerSubscriptionViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public CustomerSubscriptionViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("planStart")
    public OffsetDateTime planStart;
    public CustomerSubscriptionViewModel withPlanStart(OffsetDateTime planStart) {
        this.planStart = planStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trialPeriodEnd")
    public OffsetDateTime trialPeriodEnd;
    public CustomerSubscriptionViewModel withTrialPeriodEnd(OffsetDateTime trialPeriodEnd) {
        this.trialPeriodEnd = trialPeriodEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trialPeriodStart")
    public OffsetDateTime trialPeriodStart;
    public CustomerSubscriptionViewModel withTrialPeriodStart(OffsetDateTime trialPeriodStart) {
        this.trialPeriodStart = trialPeriodStart;
        return this;
    }
}