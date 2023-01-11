package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoluntaryNutritionFact
 * Voluntary Nutrition Facts.
**/
public class VoluntaryNutritionFact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyPercentage")
    public Double dailyPercentage;
    public VoluntaryNutritionFact withDailyPercentage(Double dailyPercentage) {
        this.dailyPercentage = dailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VoluntaryNutritionFact withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public FloatUnit value;
    public VoluntaryNutritionFact withValue(FloatUnit value) {
        this.value = value;
        return this;
    }
}