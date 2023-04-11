import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the above value.
 */
export declare enum ScoreTypeEnum {
    ScoreTypeUnspecified = "SCORE_TYPE_UNSPECIFIED",
    Probability = "PROBABILITY",
    StdDevScore = "STD_DEV_SCORE",
    Percentile = "PERCENTILE",
    Raw = "RAW"
}
/**
 * Analysis scores are described by a value and a ScoreType.
 */
export declare class Score extends SpeakeasyBase {
    /**
     * The type of the above value.
     */
    type?: ScoreTypeEnum;
    /**
     * Score value. Semantics described by type below.
     */
    value?: number;
}
