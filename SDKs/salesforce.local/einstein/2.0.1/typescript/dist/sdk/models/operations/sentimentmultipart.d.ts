import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SentimentMultipartSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class SentimentMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Prediction Result
     */
    sentimentPredictResponse?: shared.SentimentPredictResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
