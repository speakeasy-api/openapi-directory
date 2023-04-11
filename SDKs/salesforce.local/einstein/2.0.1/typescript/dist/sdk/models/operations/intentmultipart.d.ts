import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IntentMultipartSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class IntentMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Prediction Result
     */
    intentPredictResponse?: shared.IntentPredictResponse;
    /**
     * Exceed usage limitation
     */
    predictionErrorResponse?: shared.PredictionErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
