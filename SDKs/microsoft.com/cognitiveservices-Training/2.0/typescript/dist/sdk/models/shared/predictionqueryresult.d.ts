import { SpeakeasyBase } from "../../../internal/utils";
import { PredictionQueryToken } from "./predictionquerytoken";
import { StoredImagePrediction } from "./storedimageprediction";
/**
 * OK
 */
export declare class PredictionQueryResult extends SpeakeasyBase {
    results?: StoredImagePrediction[];
    token?: PredictionQueryToken;
}
