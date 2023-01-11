package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscriptionRequestSubscription {
    @JsonProperty("categories")
    public SubscriptionCategoryEnum[] categories;
    public SubscriptionRequestSubscription withCategories(SubscriptionCategoryEnum[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hips")
    public OrganizationRepresentation[] hips;
    public SubscriptionRequestSubscription withHips(OrganizationRepresentation[] hips) {
        this.hips = hips;
        return this;
    }
    @JsonProperty("hiu")
    public OrganizationRepresentation hiu;
    public SubscriptionRequestSubscription withHiu(OrganizationRepresentation hiu) {
        this.hiu = hiu;
        return this;
    }
    @JsonProperty("patient")
    public ConsentManagerPatientId patient;
    public SubscriptionRequestSubscription withPatient(ConsentManagerPatientId patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("period")
    public SubscriptionPeriod period;
    public SubscriptionRequestSubscription withPeriod(SubscriptionPeriod period) {
        this.period = period;
        return this;
    }
    @JsonProperty("purpose")
    public UsePurpose purpose;
    public SubscriptionRequestSubscription withPurpose(UsePurpose purpose) {
        this.purpose = purpose;
        return this;
    }
}