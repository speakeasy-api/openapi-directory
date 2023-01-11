import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AttributeParametersScoreTypeEnum {
    ScoreTypeUnspecified = "SCORE_TYPE_UNSPECIFIED",
    Probability = "PROBABILITY",
    StdDevScore = "STD_DEV_SCORE",
    Percentile = "PERCENTILE",
    Raw = "RAW"
}
export declare class AttributeParameters extends SpeakeasyBase {
    scoreThreshold?: number;
    scoreType?: AttributeParametersScoreTypeEnum;
}
