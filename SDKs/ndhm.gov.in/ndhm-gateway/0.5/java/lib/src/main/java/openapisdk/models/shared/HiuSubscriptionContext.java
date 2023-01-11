package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HiuSubscriptionContext {
    @JsonProperty("categories")
    public SubscriptionCategoryEnum[] categories;
    public HiuSubscriptionContext withCategories(SubscriptionCategoryEnum[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hip")
    public OrganizationRepresentation hip;
    public HiuSubscriptionContext withHip(OrganizationRepresentation hip) {
        this.hip = hip;
        return this;
    }
    @JsonProperty("period")
    public SubscriptionPeriod period;
    public HiuSubscriptionContext withPeriod(SubscriptionPeriod period) {
        this.period = period;
        return this;
    }
}