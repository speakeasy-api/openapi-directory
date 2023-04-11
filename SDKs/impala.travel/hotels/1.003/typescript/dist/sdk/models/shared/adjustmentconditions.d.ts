import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The date range the adjustment applies to, inclusive.
 */
export declare class AdjustmentConditionsRulesBookableDateRange extends SpeakeasyBase {
    end: string;
    start: string;
}
/**
 * The number of nights the adjustment applies to, inclusive.
 */
export declare class AdjustmentConditionsRulesNightsRange extends SpeakeasyBase {
    max: number;
    min: number;
}
export declare class AdjustmentConditionsRules extends SpeakeasyBase {
    /**
     * The date range the adjustment applies to, inclusive.
     */
    bookableDateRange: AdjustmentConditionsRulesBookableDateRange;
    /**
     * The number of nights the adjustment applies to, inclusive.
     */
    nightsRange: AdjustmentConditionsRulesNightsRange;
}
/**
 * The type of the condition. Currently we only support conditions based on length of stay.
 */
export declare enum AdjustmentConditionsTypeEnum {
    LengthOfStay = "LENGTH_OF_STAY"
}
export declare class AdjustmentConditions extends SpeakeasyBase {
    rules: AdjustmentConditionsRules;
    /**
     * The type of the condition. Currently we only support conditions based on length of stay.
     */
    type: AdjustmentConditionsTypeEnum;
}
