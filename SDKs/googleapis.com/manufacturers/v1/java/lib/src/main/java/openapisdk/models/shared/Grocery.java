package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Grocery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeIngredients")
    public String activeIngredients;
    public Grocery withActiveIngredients(String activeIngredients) {
        this.activeIngredients = activeIngredients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alcoholByVolume")
    public Double alcoholByVolume;
    public Grocery withAlcoholByVolume(Double alcoholByVolume) {
        this.alcoholByVolume = alcoholByVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allergens")
    public String allergens;
    public Grocery withAllergens(String allergens) {
        this.allergens = allergens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("derivedNutritionClaim")
    public String[] derivedNutritionClaim;
    public Grocery withDerivedNutritionClaim(String[] derivedNutritionClaim) {
        this.derivedNutritionClaim = derivedNutritionClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directions")
    public String directions;
    public Grocery withDirections(String directions) {
        this.directions = directions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indications")
    public String indications;
    public Grocery withIndications(String indications) {
        this.indications = indications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingredients")
    public String ingredients;
    public Grocery withIngredients(String ingredients) {
        this.ingredients = ingredients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nutritionClaim")
    public String[] nutritionClaim;
    public Grocery withNutritionClaim(String[] nutritionClaim) {
        this.nutritionClaim = nutritionClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageInstructions")
    public String storageInstructions;
    public Grocery withStorageInstructions(String storageInstructions) {
        this.storageInstructions = storageInstructions;
        return this;
    }
}