import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeliveryPredictionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Prediction and its probability
     */
    deliveryPredictionResponse?: shared.DeliveryPredictionResponse;
    /**
     * MissingParameter
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
