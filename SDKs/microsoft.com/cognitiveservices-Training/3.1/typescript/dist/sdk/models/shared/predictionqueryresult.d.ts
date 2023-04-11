import { SpeakeasyBase } from "../../../internal/utils";
import { PredictionQueryToken } from "./predictionquerytoken";
import { StoredImagePrediction } from "./storedimageprediction";
/**
 * Query result of the prediction images that were sent to your prediction endpoint.
 */
export declare class PredictionQueryResult extends SpeakeasyBase {
    /**
     * Result of an prediction request.
     */
    results?: StoredImagePrediction[];
    token?: PredictionQueryToken;
}
