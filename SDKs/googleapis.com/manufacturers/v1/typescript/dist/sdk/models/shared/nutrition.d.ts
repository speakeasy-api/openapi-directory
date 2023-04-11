import { SpeakeasyBase } from "../../../internal/utils";
import { FloatUnit } from "./floatunit";
import { VoluntaryNutritionFact } from "./voluntarynutritionfact";
export declare class Nutrition extends SpeakeasyBase {
    /**
     * Combination of float amount and unit.
     */
    addedSugars?: FloatUnit;
    /**
     * Added sugars daily percentage.
     */
    addedSugarsDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    calcium?: FloatUnit;
    /**
     * Calcium daily percentage.
     */
    calciumDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    cholesterol?: FloatUnit;
    /**
     * Cholesterol daily percentage.
     */
    cholesterolDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    dietaryFiber?: FloatUnit;
    /**
     * Dietary fiber daily percentage.
     */
    dietaryFiberDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    energy?: FloatUnit;
    /**
     * Combination of float amount and unit.
     */
    energyFromFat?: FloatUnit;
    /**
     * Folate daily percentage.
     */
    folateDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    folateFolicAcid?: FloatUnit;
    /**
     * Folate mcg DFE.
     */
    folateMcgDfe?: number;
    /**
     * Combination of float amount and unit.
     */
    iron?: FloatUnit;
    /**
     * Iron daily percentage.
     */
    ironDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    monounsaturatedFat?: FloatUnit;
    /**
     * Nutrition fact measure.
     */
    nutritionFactMeasure?: string;
    /**
     * Combination of float amount and unit.
     */
    polyols?: FloatUnit;
    /**
     * Combination of float amount and unit.
     */
    polyunsaturatedFat?: FloatUnit;
    /**
     * Combination of float amount and unit.
     */
    potassium?: FloatUnit;
    /**
     * Potassium daily percentage.
     */
    potassiumDailyPercentage?: number;
    /**
     * Prepared size description.
     */
    preparedSizeDescription?: string;
    /**
     * Combination of float amount and unit.
     */
    protein?: FloatUnit;
    /**
     * Protein daily percentage.
     */
    proteinDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    saturatedFat?: FloatUnit;
    /**
     * Saturated fat daily percentage.
     */
    saturatedFatDailyPercentage?: number;
    /**
     * Food Serving Size. Serving size description.
     */
    servingSizeDescription?: string;
    /**
     * Combination of float amount and unit.
     */
    servingSizeMeasure?: FloatUnit;
    /**
     * Servings per container.
     */
    servingsPerContainer?: string;
    /**
     * Combination of float amount and unit.
     */
    sodium?: FloatUnit;
    /**
     * Sodium daily percentage.
     */
    sodiumDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    starch?: FloatUnit;
    /**
     * Combination of float amount and unit.
     */
    totalCarbohydrate?: FloatUnit;
    /**
     * Total carbohydrate daily percentage.
     */
    totalCarbohydrateDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    totalFat?: FloatUnit;
    /**
     * Total fat daily percentage.
     */
    totalFatDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    totalSugars?: FloatUnit;
    /**
     * Total sugars daily percentage.
     */
    totalSugarsDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    transFat?: FloatUnit;
    /**
     * Trans fat daily percentage.
     */
    transFatDailyPercentage?: number;
    /**
     * Combination of float amount and unit.
     */
    vitaminD?: FloatUnit;
    /**
     * Vitamin D daily percentage.
     */
    vitaminDDailyPercentage?: number;
    /**
     * Voluntary nutrition fact.
     */
    voluntaryNutritionFact?: VoluntaryNutritionFact[];
}
