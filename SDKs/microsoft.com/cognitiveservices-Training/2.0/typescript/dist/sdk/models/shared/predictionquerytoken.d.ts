import { SpeakeasyBase } from "../../../internal/utils";
import { PredictionQueryTag } from "./predictionquerytag";
export declare enum PredictionQueryTokenOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest",
    Suggested = "Suggested"
}
/**
 * Parameters used to query the predictions. Limited to combining 2 tags
 */
export declare class PredictionQueryTokenInput extends SpeakeasyBase {
    application?: string;
    continuation?: string;
    endTime?: Date;
    iterationId?: string;
    maxCount?: number;
    orderBy?: PredictionQueryTokenOrderByEnum;
    session?: string;
    startTime?: Date;
}
export declare class PredictionQueryToken extends SpeakeasyBase {
    application?: string;
    continuation?: string;
    endTime?: Date;
    iterationId?: string;
    maxCount?: number;
    orderBy?: PredictionQueryTokenOrderByEnum;
    session?: string;
    startTime?: Date;
    tags?: PredictionQueryTag[];
}
