import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateIterationJsonRequest extends SpeakeasyBase {
    /**
     * The updated iteration model.
     */
    iterationInput: shared.IterationInput;
    trainingKey: string;
    /**
     * Iteration id.
     */
    iterationId: string;
    /**
     * Project id.
     */
    projectId: string;
}
export declare class UpdateIterationJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    iteration?: shared.Iteration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
