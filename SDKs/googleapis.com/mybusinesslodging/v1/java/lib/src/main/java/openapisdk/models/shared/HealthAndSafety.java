package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HealthAndSafety
 * Health and safety measures implemented by the hotel during COVID-19.
**/
public class HealthAndSafety {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedCleaning")
    public EnhancedCleaning enhancedCleaning;
    public HealthAndSafety withEnhancedCleaning(EnhancedCleaning enhancedCleaning) {
        this.enhancedCleaning = enhancedCleaning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("increasedFoodSafety")
    public IncreasedFoodSafety increasedFoodSafety;
    public HealthAndSafety withIncreasedFoodSafety(IncreasedFoodSafety increasedFoodSafety) {
        this.increasedFoodSafety = increasedFoodSafety;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimizedContact")
    public MinimizedContact minimizedContact;
    public HealthAndSafety withMinimizedContact(MinimizedContact minimizedContact) {
        this.minimizedContact = minimizedContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalProtection")
    public PersonalProtection personalProtection;
    public HealthAndSafety withPersonalProtection(PersonalProtection personalProtection) {
        this.personalProtection = personalProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physicalDistancing")
    public PhysicalDistancing physicalDistancing;
    public HealthAndSafety withPhysicalDistancing(PhysicalDistancing physicalDistancing) {
        this.physicalDistancing = physicalDistancing;
        return this;
    }
}