import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryPredictionResultsRawRequest extends SpeakeasyBase {
    /**
     * Parameters used to query the predictions. Limited to combining 2 tags
     */
    requestBody: Uint8Array;
    trainingKey: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class QueryPredictionResultsRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    predictionQuery?: shared.PredictionQuery;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
