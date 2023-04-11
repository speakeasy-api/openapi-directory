import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryPredictionResultsJsonRequest extends SpeakeasyBase {
    /**
     * Parameters used to query the predictions. Limited to combining 2 tags
     */
    predictionQueryTokenInput: shared.PredictionQueryTokenInput;
    trainingKey: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class QueryPredictionResultsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    predictionQuery?: shared.PredictionQuery;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
