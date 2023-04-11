import { SpeakeasyBase } from "../../../internal/utils";
/**
 * What type of scores to return. If unset, defaults to probability scores.
 */
export declare enum AttributeParametersScoreTypeEnum {
    ScoreTypeUnspecified = "SCORE_TYPE_UNSPECIFIED",
    Probability = "PROBABILITY",
    StdDevScore = "STD_DEV_SCORE",
    Percentile = "PERCENTILE",
    Raw = "RAW"
}
/**
 * Configurable parameters for attribute scoring.
 */
export declare class AttributeParameters extends SpeakeasyBase {
    /**
     * Don't return scores for this attribute that are below this threshold. If unset, a default threshold will be applied. A FloatValue wrapper is used to distinguish between 0 vs. default/unset.
     */
    scoreThreshold?: number;
    /**
     * What type of scores to return. If unset, defaults to probability scores.
     */
    scoreType?: AttributeParametersScoreTypeEnum;
}
