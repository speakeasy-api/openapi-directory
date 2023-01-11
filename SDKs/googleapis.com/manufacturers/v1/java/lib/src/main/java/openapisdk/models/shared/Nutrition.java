package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Nutrition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedSugars")
    public FloatUnit addedSugars;
    public Nutrition withAddedSugars(FloatUnit addedSugars) {
        this.addedSugars = addedSugars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedSugarsDailyPercentage")
    public Double addedSugarsDailyPercentage;
    public Nutrition withAddedSugarsDailyPercentage(Double addedSugarsDailyPercentage) {
        this.addedSugarsDailyPercentage = addedSugarsDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calcium")
    public FloatUnit calcium;
    public Nutrition withCalcium(FloatUnit calcium) {
        this.calcium = calcium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calciumDailyPercentage")
    public Double calciumDailyPercentage;
    public Nutrition withCalciumDailyPercentage(Double calciumDailyPercentage) {
        this.calciumDailyPercentage = calciumDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cholesterol")
    public FloatUnit cholesterol;
    public Nutrition withCholesterol(FloatUnit cholesterol) {
        this.cholesterol = cholesterol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cholesterolDailyPercentage")
    public Double cholesterolDailyPercentage;
    public Nutrition withCholesterolDailyPercentage(Double cholesterolDailyPercentage) {
        this.cholesterolDailyPercentage = cholesterolDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dietaryFiber")
    public FloatUnit dietaryFiber;
    public Nutrition withDietaryFiber(FloatUnit dietaryFiber) {
        this.dietaryFiber = dietaryFiber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dietaryFiberDailyPercentage")
    public Double dietaryFiberDailyPercentage;
    public Nutrition withDietaryFiberDailyPercentage(Double dietaryFiberDailyPercentage) {
        this.dietaryFiberDailyPercentage = dietaryFiberDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energy")
    public FloatUnit energy;
    public Nutrition withEnergy(FloatUnit energy) {
        this.energy = energy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyFromFat")
    public FloatUnit energyFromFat;
    public Nutrition withEnergyFromFat(FloatUnit energyFromFat) {
        this.energyFromFat = energyFromFat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folateDailyPercentage")
    public Double folateDailyPercentage;
    public Nutrition withFolateDailyPercentage(Double folateDailyPercentage) {
        this.folateDailyPercentage = folateDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folateFolicAcid")
    public FloatUnit folateFolicAcid;
    public Nutrition withFolateFolicAcid(FloatUnit folateFolicAcid) {
        this.folateFolicAcid = folateFolicAcid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folateMcgDfe")
    public Double folateMcgDfe;
    public Nutrition withFolateMcgDfe(Double folateMcgDfe) {
        this.folateMcgDfe = folateMcgDfe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iron")
    public FloatUnit iron;
    public Nutrition withIron(FloatUnit iron) {
        this.iron = iron;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ironDailyPercentage")
    public Double ironDailyPercentage;
    public Nutrition withIronDailyPercentage(Double ironDailyPercentage) {
        this.ironDailyPercentage = ironDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monounsaturatedFat")
    public FloatUnit monounsaturatedFat;
    public Nutrition withMonounsaturatedFat(FloatUnit monounsaturatedFat) {
        this.monounsaturatedFat = monounsaturatedFat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nutritionFactMeasure")
    public String nutritionFactMeasure;
    public Nutrition withNutritionFactMeasure(String nutritionFactMeasure) {
        this.nutritionFactMeasure = nutritionFactMeasure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polyols")
    public FloatUnit polyols;
    public Nutrition withPolyols(FloatUnit polyols) {
        this.polyols = polyols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polyunsaturatedFat")
    public FloatUnit polyunsaturatedFat;
    public Nutrition withPolyunsaturatedFat(FloatUnit polyunsaturatedFat) {
        this.polyunsaturatedFat = polyunsaturatedFat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("potassium")
    public FloatUnit potassium;
    public Nutrition withPotassium(FloatUnit potassium) {
        this.potassium = potassium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("potassiumDailyPercentage")
    public Double potassiumDailyPercentage;
    public Nutrition withPotassiumDailyPercentage(Double potassiumDailyPercentage) {
        this.potassiumDailyPercentage = potassiumDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preparedSizeDescription")
    public String preparedSizeDescription;
    public Nutrition withPreparedSizeDescription(String preparedSizeDescription) {
        this.preparedSizeDescription = preparedSizeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protein")
    public FloatUnit protein;
    public Nutrition withProtein(FloatUnit protein) {
        this.protein = protein;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proteinDailyPercentage")
    public Double proteinDailyPercentage;
    public Nutrition withProteinDailyPercentage(Double proteinDailyPercentage) {
        this.proteinDailyPercentage = proteinDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturatedFat")
    public FloatUnit saturatedFat;
    public Nutrition withSaturatedFat(FloatUnit saturatedFat) {
        this.saturatedFat = saturatedFat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturatedFatDailyPercentage")
    public Double saturatedFatDailyPercentage;
    public Nutrition withSaturatedFatDailyPercentage(Double saturatedFatDailyPercentage) {
        this.saturatedFatDailyPercentage = saturatedFatDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingSizeDescription")
    public String servingSizeDescription;
    public Nutrition withServingSizeDescription(String servingSizeDescription) {
        this.servingSizeDescription = servingSizeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingSizeMeasure")
    public FloatUnit servingSizeMeasure;
    public Nutrition withServingSizeMeasure(FloatUnit servingSizeMeasure) {
        this.servingSizeMeasure = servingSizeMeasure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingsPerContainer")
    public String servingsPerContainer;
    public Nutrition withServingsPerContainer(String servingsPerContainer) {
        this.servingsPerContainer = servingsPerContainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sodium")
    public FloatUnit sodium;
    public Nutrition withSodium(FloatUnit sodium) {
        this.sodium = sodium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sodiumDailyPercentage")
    public Double sodiumDailyPercentage;
    public Nutrition withSodiumDailyPercentage(Double sodiumDailyPercentage) {
        this.sodiumDailyPercentage = sodiumDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starch")
    public FloatUnit starch;
    public Nutrition withStarch(FloatUnit starch) {
        this.starch = starch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCarbohydrate")
    public FloatUnit totalCarbohydrate;
    public Nutrition withTotalCarbohydrate(FloatUnit totalCarbohydrate) {
        this.totalCarbohydrate = totalCarbohydrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCarbohydrateDailyPercentage")
    public Double totalCarbohydrateDailyPercentage;
    public Nutrition withTotalCarbohydrateDailyPercentage(Double totalCarbohydrateDailyPercentage) {
        this.totalCarbohydrateDailyPercentage = totalCarbohydrateDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFat")
    public FloatUnit totalFat;
    public Nutrition withTotalFat(FloatUnit totalFat) {
        this.totalFat = totalFat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFatDailyPercentage")
    public Double totalFatDailyPercentage;
    public Nutrition withTotalFatDailyPercentage(Double totalFatDailyPercentage) {
        this.totalFatDailyPercentage = totalFatDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSugars")
    public FloatUnit totalSugars;
    public Nutrition withTotalSugars(FloatUnit totalSugars) {
        this.totalSugars = totalSugars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSugarsDailyPercentage")
    public Double totalSugarsDailyPercentage;
    public Nutrition withTotalSugarsDailyPercentage(Double totalSugarsDailyPercentage) {
        this.totalSugarsDailyPercentage = totalSugarsDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transFat")
    public FloatUnit transFat;
    public Nutrition withTransFat(FloatUnit transFat) {
        this.transFat = transFat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transFatDailyPercentage")
    public Double transFatDailyPercentage;
    public Nutrition withTransFatDailyPercentage(Double transFatDailyPercentage) {
        this.transFatDailyPercentage = transFatDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vitaminD")
    public FloatUnit vitaminD;
    public Nutrition withVitaminD(FloatUnit vitaminD) {
        this.vitaminD = vitaminD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vitaminDDailyPercentage")
    public Double vitaminDDailyPercentage;
    public Nutrition withVitaminDDailyPercentage(Double vitaminDDailyPercentage) {
        this.vitaminDDailyPercentage = vitaminDDailyPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voluntaryNutritionFact")
    public VoluntaryNutritionFact[] voluntaryNutritionFact;
    public Nutrition withVoluntaryNutritionFact(VoluntaryNutritionFact[] voluntaryNutritionFact) {
        this.voluntaryNutritionFact = voluntaryNutritionFact;
        return this;
    }
}