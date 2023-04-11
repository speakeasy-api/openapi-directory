import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EkmanEmotionRequest extends SpeakeasyBase {
    requestBody?: shared.Post[];
    all?: boolean;
}
export declare class EkmanEmotionResponse extends SpeakeasyBase {
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
