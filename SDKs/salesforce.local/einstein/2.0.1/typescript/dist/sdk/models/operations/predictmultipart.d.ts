import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PredictMultipartSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class PredictMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Prediction Result
     */
    imageClassificationResponse?: shared.ImageClassificationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
