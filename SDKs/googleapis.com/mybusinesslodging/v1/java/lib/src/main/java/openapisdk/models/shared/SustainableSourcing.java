package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SustainableSourcing
 * Sustainable sourcing practices implemented at the hotel.
**/
public class SustainableSourcing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecoFriendlyToiletries")
    public Boolean ecoFriendlyToiletries;
    public SustainableSourcing withEcoFriendlyToiletries(Boolean ecoFriendlyToiletries) {
        this.ecoFriendlyToiletries = ecoFriendlyToiletries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecoFriendlyToiletriesException")
    public SustainableSourcingEcoFriendlyToiletriesExceptionEnum ecoFriendlyToiletriesException;
    public SustainableSourcing withEcoFriendlyToiletriesException(SustainableSourcingEcoFriendlyToiletriesExceptionEnum ecoFriendlyToiletriesException) {
        this.ecoFriendlyToiletriesException = ecoFriendlyToiletriesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locallySourcedFoodAndBeverages")
    public Boolean locallySourcedFoodAndBeverages;
    public SustainableSourcing withLocallySourcedFoodAndBeverages(Boolean locallySourcedFoodAndBeverages) {
        this.locallySourcedFoodAndBeverages = locallySourcedFoodAndBeverages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locallySourcedFoodAndBeveragesException")
    public SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum locallySourcedFoodAndBeveragesException;
    public SustainableSourcing withLocallySourcedFoodAndBeveragesException(SustainableSourcingLocallySourcedFoodAndBeveragesExceptionEnum locallySourcedFoodAndBeveragesException) {
        this.locallySourcedFoodAndBeveragesException = locallySourcedFoodAndBeveragesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organicCageFreeEggs")
    public Boolean organicCageFreeEggs;
    public SustainableSourcing withOrganicCageFreeEggs(Boolean organicCageFreeEggs) {
        this.organicCageFreeEggs = organicCageFreeEggs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organicCageFreeEggsException")
    public SustainableSourcingOrganicCageFreeEggsExceptionEnum organicCageFreeEggsException;
    public SustainableSourcing withOrganicCageFreeEggsException(SustainableSourcingOrganicCageFreeEggsExceptionEnum organicCageFreeEggsException) {
        this.organicCageFreeEggsException = organicCageFreeEggsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organicFoodAndBeverages")
    public Boolean organicFoodAndBeverages;
    public SustainableSourcing withOrganicFoodAndBeverages(Boolean organicFoodAndBeverages) {
        this.organicFoodAndBeverages = organicFoodAndBeverages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organicFoodAndBeveragesException")
    public SustainableSourcingOrganicFoodAndBeveragesExceptionEnum organicFoodAndBeveragesException;
    public SustainableSourcing withOrganicFoodAndBeveragesException(SustainableSourcingOrganicFoodAndBeveragesExceptionEnum organicFoodAndBeveragesException) {
        this.organicFoodAndBeveragesException = organicFoodAndBeveragesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsiblePurchasingPolicy")
    public Boolean responsiblePurchasingPolicy;
    public SustainableSourcing withResponsiblePurchasingPolicy(Boolean responsiblePurchasingPolicy) {
        this.responsiblePurchasingPolicy = responsiblePurchasingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsiblePurchasingPolicyException")
    public SustainableSourcingResponsiblePurchasingPolicyExceptionEnum responsiblePurchasingPolicyException;
    public SustainableSourcing withResponsiblePurchasingPolicyException(SustainableSourcingResponsiblePurchasingPolicyExceptionEnum responsiblePurchasingPolicyException) {
        this.responsiblePurchasingPolicyException = responsiblePurchasingPolicyException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsiblySourcesSeafood")
    public Boolean responsiblySourcesSeafood;
    public SustainableSourcing withResponsiblySourcesSeafood(Boolean responsiblySourcesSeafood) {
        this.responsiblySourcesSeafood = responsiblySourcesSeafood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsiblySourcesSeafoodException")
    public SustainableSourcingResponsiblySourcesSeafoodExceptionEnum responsiblySourcesSeafoodException;
    public SustainableSourcing withResponsiblySourcesSeafoodException(SustainableSourcingResponsiblySourcesSeafoodExceptionEnum responsiblySourcesSeafoodException) {
        this.responsiblySourcesSeafoodException = responsiblySourcesSeafoodException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("veganMeals")
    public Boolean veganMeals;
    public SustainableSourcing withVeganMeals(Boolean veganMeals) {
        this.veganMeals = veganMeals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("veganMealsException")
    public SustainableSourcingVeganMealsExceptionEnum veganMealsException;
    public SustainableSourcing withVeganMealsException(SustainableSourcingVeganMealsExceptionEnum veganMealsException) {
        this.veganMealsException = veganMealsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vegetarianMeals")
    public Boolean vegetarianMeals;
    public SustainableSourcing withVegetarianMeals(Boolean vegetarianMeals) {
        this.vegetarianMeals = vegetarianMeals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vegetarianMealsException")
    public SustainableSourcingVegetarianMealsExceptionEnum vegetarianMealsException;
    public SustainableSourcing withVegetarianMealsException(SustainableSourcingVegetarianMealsExceptionEnum vegetarianMealsException) {
        this.vegetarianMealsException = vegetarianMealsException;
        return this;
    }
}