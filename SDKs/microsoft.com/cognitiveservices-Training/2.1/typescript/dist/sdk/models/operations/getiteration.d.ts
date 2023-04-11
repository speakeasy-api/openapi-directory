import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIterationRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The id of the iteration to get
     */
    iterationId: string;
    /**
     * The id of the project the iteration belongs to
     */
    projectId: string;
}
export declare class GetIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    iteration?: shared.Iteration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
