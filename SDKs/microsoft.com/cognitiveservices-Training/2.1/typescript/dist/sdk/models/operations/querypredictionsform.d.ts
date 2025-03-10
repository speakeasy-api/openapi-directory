import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryPredictionsFormRequest extends SpeakeasyBase {
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
export declare class QueryPredictionsFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    predictionQueryResult?: shared.PredictionQueryResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
