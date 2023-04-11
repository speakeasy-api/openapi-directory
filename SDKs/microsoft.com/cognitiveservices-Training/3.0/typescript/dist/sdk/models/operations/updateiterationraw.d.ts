import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateIterationRawRequest extends SpeakeasyBase {
    /**
     * The updated iteration model.
     */
    requestBody: Uint8Array;
    /**
     * API key.
     */
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
export declare class UpdateIterationRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    iteration?: shared.Iteration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
