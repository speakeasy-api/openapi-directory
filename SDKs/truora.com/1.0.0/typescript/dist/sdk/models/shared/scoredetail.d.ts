import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status
 */
export declare enum ScoreDetailResultEnum {
    Pending = "pending",
    Found = "found",
    NotFound = "not_found",
    Error = "error",
    Delayed = "delayed",
    Ignored = "ignored"
}
/**
 * Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none
 */
export declare enum ScoreDetailSeverityEnum {
    Unknown = "unknown",
    None = "none",
    VeryLow = "very_low",
    Low = "low",
    Medium = "medium",
    High = "high",
    VeryHigh = "very_high"
}
/**
 * Represents score detail of a background check
 */
export declare class ScoreDetail extends SpeakeasyBase {
    /**
     * Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status
     */
    result: ScoreDetailResultEnum;
    /**
     * Dataset score. Number between 0 and 1 where 1 is the best score.
     */
    score: number;
    /**
     * Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none
     */
    severity: ScoreDetailSeverityEnum;
}
