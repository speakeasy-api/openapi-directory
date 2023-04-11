import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
import { PredictionQueryToken } from "./predictionquerytoken";
/**
 * OK
 */
export declare class PredictionQuery extends SpeakeasyBase {
    results?: Prediction[];
    token?: PredictionQueryToken;
}
