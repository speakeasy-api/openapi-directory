import { SpeakeasyBase } from "../../../internal/utils";
import { PredictionQueryTag } from "./predictionquerytag";
export declare enum PredictionQueryTokenOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest",
    Suggested = "Suggested"
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
