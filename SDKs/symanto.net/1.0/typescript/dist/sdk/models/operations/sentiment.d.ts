import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SentimentRequest extends SpeakeasyBase {
    requestBody?: shared.Post[];
    all?: boolean;
}
export declare class SentimentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    predictionResults?: shared.PostPredicted[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation Error
     */
    validationErrors?: shared.ValidationErrors;
}
